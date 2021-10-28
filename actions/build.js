const main = async _ => {

    try {
        const fs = require("fs")
        const {
            Octokit
        } = require("@octokit/core")
           const { createActionAuth } = require("@octokit/auth-action")

           const auth = createActionAuth()
           const authentication = await auth()
        const octokit = new Octokit({
            auth: authentication.token })
        const gh = require('parse-github-url')

        const Handlebars = require('handlebars')
        const source = require('./template')
        const template = Handlebars.compile(source)


        text = fs.readFileSync("./contest/entry.csv", "utf8")
        let list = convertCSV2JSON(text)
        console.log(`# Devtoberfest 2021 Project Entries`)
        let lastURL = ''
        for (const item of list) {
            if (item.URL.includes('https://github.com/') && item.URL !== lastURL ) {
                const parts = gh(item.URL)
                //console.log(`${parts.owner}, ${parts.name}`)
                let response = await octokit.request('GET /repos/{owner}/{repo}', {
                    owner: parts.owner,
                    repo: parts.name
                })
                const data = response.data
                data.created_at_formatted = new Date(data.created_at).toUTCString()
                data.updated_at_formatted = new Date(data.updated_at).toUTCString()

                data.contributors = []
                let page = 1
                while (true) {
                    let contributors = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
                        owner: parts.owner,
                        repo: parts.name,
                        per_page: 100,
                        page
                    })
                    if (contributors.data.length === 0) {
                        break
                    }
                    page++
                    data.contributors = data.contributors.concat(contributors.data)
                }
                if (data.license) {
                    if (data.license.url) {
                        const parts = gh(data.license.url)
                        //console.log(parts.pathname)
                        let license = await octokit.request(`GET /${parts.pathname}`, {})
                        data.license.html_url = license.data.html_url
                    }
                }
                console.log(template({
                    data
                }))
            }
            lastURL = item.URL
        }
        console.log(`![Entries builder](https://github.com/sap-samples/sap-devtoberfest-2020/workflows/Entries%20builder/badge.svg)`)
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

function convertCSV2JSON(text) {
    let array = text.split("\n")
    let result = []
    let headers = array[0].split(",")

    // Since headers are separated, we
    // need to traverse remaining n-1 rows.
    for (let i = 1; i < array.length - 1; i++) {
        let obj = {}
        let str = array[i]
        let properties = str.split(",")
        for (let j in headers) {
            if (properties[j].includes(",")) {
                obj[headers[j]] = properties[j]
                    .split(",").map(item => item.trim())
            } else obj[headers[j]] = properties[j]
        }
        result.push(obj)
    }

    var byURL = result.slice(0)
    byURL.sort(function (a, b) {
        var x = a.URL
        var y = b.URL
        return x < y ? -1 : x > y ? 1 : 0;
    })
    return byURL
}

main()
