const knex = require('../model/database_connection')
const { update } = require('../model/database_connection')

let inserted_data =(movies_deatils)=>{
    return knex("movies").insert(movies_deatils)
}
let read_data =()=>{
    return knex.select("*").from ("movies")
}

let update_data = (runtime,details)=>{
    return knex('movies').update(details).where('movies.runtime',runtime)
}

let delete_data  = (runtime )=>{
    return knex('movies').del().where("runtime",runtime)
} 


module.exports ={inserted_data,read_data,update_data, delete_data}