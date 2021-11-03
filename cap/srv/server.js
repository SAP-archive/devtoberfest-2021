const cds = require ('@sap/cds')
cds.on('bootstrap', (app) => {
    const helmet = require ('helmet')
    const cors = require('cors');
    app.use(cors());
    app.use(helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        // custom settings
      }
    }
  }))
})

module.exports = cds.server