const log = require("loglevel").getLogger("timesheet")
log.setLevel( log.levels.DEBUG )

const result = require("dotenv").config()
if (result.error) {
    throw result.error
}

module.exports = require("express")()

        /*== third party addons ==*/
    .use( require("compression")() )
    .use( require("helmet")()      )

        /*== set up the routes ==*/
    .use( require("express").static("public") )

        /*== start up server ==*/
    .listen(process.env.PORT, () => {
        log.info(`listening on port ${process.env.PORT}`)
    })