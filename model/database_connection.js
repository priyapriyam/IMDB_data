var  knex = require ("knex")({
    client: 'mysql',
    connection:{
        host: "127.0.0.1",
        user: "root",
        password: "priyaMishra@123",
        database: "IMDB"
    }
})
module.exports = (knex)