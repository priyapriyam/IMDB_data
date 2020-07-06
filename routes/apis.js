const knexmodel = require('../model/knex');

const movies_data = require('./file.json');
const knex = require('../model/knex');

module.exports = (app) => {
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

    app.put('/edit_data/:runtime', (req, res) => {
        let runtime = req.params.runtime
        let details = {
            name: req.body.name,
            language: req.body.language,
            director: req.body.director
        }
        knex.update_data(runtime,details)
        .then((data) => {
            console.log("upated data")
            res.send(data)
        })
        .catch((err) => {
            console.log("somethig is wrong")
        })
    })
    app.delete('/delete_data/:runtime',(req,res) => {
        let runtime = req.params.runtime
        knex.delete_data(runtime)
        .then((data)=>{
            console.log("data deleted")
            res.send({data})
        })
        .catch((err)=>{
            console.log("something is wrong")
            res.send({err})
        })
})
}













