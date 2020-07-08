const knex = require('../model/database_connection')

module.exports = (knex)
knex.schema.hasTable("").then((exists) => {
    if (!exists) {
        return knex.schema.createTable("movies", (table) => {
                table.increments('movies_id' )
                table.string('bio'),
                table.string('name'),
                table.string('language'),
                table.string('poster_image_url'),
                table.string('country'),
                table.string('director'),
                table.string('genre'),
                table.string('runtime')
        })
            .catch((err) => {
                console.log(err)
            })
    }
    return console.log("table has created")
})
