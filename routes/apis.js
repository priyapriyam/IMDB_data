const knexmodel = require('../model/knex');

const movies_data = require('./file.json');
const knex = require('../model/knex');
const { table } = require('../model/database_connection');

module.exports = (app) => {
    // 1
    app.post('/post_data', (req, res) => {
        let list = []
        for (i = 0; i < movies_data.length; i++) {
            var movies_details = {
                bio: movies_data[i]['bio'],
                country: movies_data[i]['country'],
                director: movies_data[i]['director'],
                genre: movies_data[i]['genre'],
                language: movies_data[i]['language'],
                name: movies_data[i]['name'],
                poster_image_url: movies_data[i]['poster_image_url'],
                runtime: movies_data[i]['runtime']
            }
            console.log(movies_details);

            knexmodel.inserted_data(movies_details)
                .then((result) => {

                })
                .catch((err) => {
                    console.log(err)
                    res.send(err)
                })

        }

    })
    // 2

    app.get('/get_data', (req, res) => {
        knex.read_data()
            .then((data) => {
                console.log("data is readble")
                res.send(data)
            })
            .catch((err) => {
                console.log("something is wrong")
                res.send(err)
            })
    })

    // 3

    app.get('/get_data/:name', (req, res) => {
        let name = req.params.name
        knex.get_data_by_name(name)
            .then((data) => {
                console.log("data is readble")
                res.send(data)
            })
            .catch((err) => {
                console.log("something is wrong")
                res.send(err)
            })

    })

    // 4

    app.get('/get_data/:language', (req, res) => {
        let language = req.params.language
        
        knex.get_data_by_language(language)
            .then((data) => {
                console.log("data is readble")
                res.send(data)
            })
            .catch((err) => {
                console.log("something is wrong")
                res.send(err)

            })

    })

    // 5

    app.get('/read_data/:genre', (req, res) => {
        let genre = req.params.genre
        knex.get_data_by_genre(genre)
            .then((data) => {
                console.log("data is readble")
                res.send(data)
            })
            .catch((err) => {
                consolr.log("error")
                res.send(err)
            })

    })

    // 6

    app.get('/dataread/:runtime', (req, res) => {
        let runtime = req.params.runtime
        knex.get_data_by_runtime(runtime)
            .then((data) => {
                console.log("data is readble")
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    })

    // 7
    app.get('/readThedata/:director', (req, res) => {
        let director = req.params.director
        knex.reda_data_by_director_name(director)
            .then((data) => {
                console.log(data)
                res.send(data)
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })


    })

    // 8

    app.put('/edit_data/:runtime', (req, res) => {
        let runtime = req.params.runtime
        let details = {
            name: req.body.name,
            language: req.body.language,
            director: req.body.director
        }
        knex.update_data(runtime, details)
            .then((data) => {
                console.log("upated data")
                res.send(data)
            })
            .catch((err) => {
                console.log("somethig is wrong")
            })
    })

    // 9

    app.put('/update_data/:name',(req,res)=>{
        let name = req.params.name
        let details = {
                    country: req.body.country,
                    language: req.body.language,
                    director: req.body.director
                }
            knex.update_data_by_name(name,details)
            .then((result)=>{
                console.log("updated data")
                res.send({result})
            })
            .catch((err)=>{
                console.log(err)
                res.send({err})
            })
    })


    // 10

    app.put('/updateTheData/:genre',(req,res)=>{
    let genre = req.params.genre
        let details = {
            country: req.body.country,
            language: req.body.language,
            director: req.body.director
        } 
        knex.update_data_by_genre(genre,details)
        .then((result)=>{
            console.log("updated data")
            res.send({result})
        })
        .catch((err)=>{
            console.log({err})
            res.send(err)
        })
    })
    // 11

    app.put('/update_data/:language',(req,res)=>{
        let language = req.params.language
        let movies_details = {
            country: req.body.country,
            language: req.body.language,
            director: req.body.director
        }
        knex.update_data_by_language(language,movies_details)
        .then((result)=>{
            console.log(result)
            res.send({result})
        })
        .catch((err)=>{
            console.log(err)
            res.send({err})
        })


    })

    // 12

    app.put('/editThedata/:director', (req, res) => {
        let director = req.params.director
        let details = {
            country: req.body.country,
            language: req.body.language,
            genre: req.body.genre
        }
        knex.update_data_by_director_name(director)
            .then((result) => {
                console.log("updated data")
                res.send(result)
            })
            .catch((err) => {
                console.log(err)
                res.send(err)
            })
    })

    // 13


    app.delete('/delete_data/:runtime', (req, res) => {
        let runtime = req.params.runtime
        knex.delete_data(runtime)
            .then((data) => {
                console.log("data deleted")
                res.send({ data })
            })
            .catch((err) => {
                console.log("something is wrong")
                res.send({ err })
            })
    })

    // 14

    app.delete('/remove_data/:genre', (req, res) => {
        let genre = req.params.genre
        knex.remove_data_by_genre(genre)
            .then((result) => {
                console.log("data deleted")
                res.send({result})
            })
            .catch((err) => {
                console.log(err)
                res.send({err})
            })

        })
    // 15

    app.delete('/data_delete/:director',(req,res)=>{
        let director = req.params.director
        knex.remove_data_by_director(director)
        .then((result)=>{
            console.log("data deleted")
            res.send({result})
        })
        .catch((err)=>{
            console.log("error")
            res.send({err})
        })
    })
    // 16

    app.delete('/removeThedata/:name', (req, res) => {
        let name = req.params.name
        knex.delete_data_by_name(name)
            .then((data) => {
                console.log("deleted data")
                res.send({ data })
            })
            .catch((err) => {
                console.log("err")
                res.send({ err })
            })

    })
    // 17

    app.delete('/deleteThedata/:language', (req, res) => {
        let language = req.params.language
        knex.delete_data_by_language(language)
            .then((result) => {
                console.log("data deleted")
                res.send({result})
            })
            .catch((err) => {
                console.log(err)
                res.send({err})
            })
        })

    // 18  This api for pagination---------------------------------------------------

    app.get('/getDatabyid/:movies_id', (req, res) => {
        var movies_id = req.params.movies_id
        knex.get_data_by_movies_id(movies_id)
        .then((result) => {
            console.log("data is readble")
            res.send(result)
        })
        .catch((err) => {
            console.log("error")
            res.send(err)

        })

    })

    //19
    app.get('/getDatabyid',(req,res) =>{
        var page = req.query.page
        knex.get_data_by_movies_id(page)
        .then((result) => {
            console.log("data is readble")
            res.send(result)
        })
        .catch((err) => {
            console.log("error")
            res.send(err)

        })
    })


}






















