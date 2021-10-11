
module.exports = `
## {{data.name}}: {{data.description}}
[{{data.html_url}}]({{data.html_url}})
* Stars: {{data.stargazers_count}}, Forks: {{data.forks_count}}, Watchers: {{data.subscribers_count}}
* Open Issues: {{data.open_issues_count}}, Has Projects: {{data.has_projects}}, Has Wiki: {{data.has_wiki}}
* Created At: {{data.created_at_formatted}}, Updated At: {{data.updated_at_formatted}}
* License: {{#if data.license.html_url}}[{{data.license.name}}]({{data.license.html_url}}){{else}}{{data.license.name}}{{/if}}
* Owner: [{{data.owner.login}}]({{data.owner.html_url}})
* Contributors: {{#data.contributors}}{{#if @last}}[{{login}}]({{html_url}}){{else}}[{{login}}]({{html_url}}), {{/if}}{{/data.contributors}}
`