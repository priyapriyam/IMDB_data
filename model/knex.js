const knex = require('../model/database_connection')
const { update } = require('../model/database_connection')

// 1

let inserted_data =(movies_deatils)=>{
    return knex("movies").insert(movies_deatils)
}

// 2
let read_data =()=>{
    return knex.select("*").from ("movies")
}

// 3
let get_data_by_name = (name) => {
    return knex.select("*").from ("movies").where('movies.name',name)

}

// 4
let get_data_by_language = (language)=>{
    // return knex.select("*").from ("movies").where('movies.language',language)
    var passV = '%'+language+'%'
    
    return knex('movies').where('language', 'like', passV)
}

// 5

let get_data_by_genre =(genre)=>{
    var Value = '%'+genre+'%'
    return knex('movies').where('genre','like',Value)
}

// 6
let get_data_by_runtime = (runtime)=>{
    var runTime = '%'+runtime+'%'
    return knex('movies').where('runtime','like',runTime)

}

// 7

let reda_data_by_director_name = (director) =>{
    return knex.select("*").from ("movies").where('movies.director',director)
}

// 8
let update_data = (runtime,details)=>{
    return knex('movies').update(details).where('movies.runtime',runtime)
}

// 9

let update_data_by_name = (name, details)=> {
    return knex('movies').update(details).where('movies.name',name)
}


// 10
let update_data_by_genre = (genre,details) => {
    return knex('movies').update(details).where('movies.genre',genre)
}

// 11
let update_data_by_language =(language,movies_details)=>{
    return knex('movies').update(movies_details).where('movies.language',language)
}

// 12
let update_data_by_director_name =(director,details)=>{
    return knex('movies').update(details).where('movies.director',director)
}

// 13


let delete_data  = (runtime )=>{
    return knex('movies').del().where("runtime",runtime)
} 

// 14

let remove_data_by_genre =(genre)=>{
    return knex('movies').del().where("genre",genre)
}

// 15

let remove_data_by_director = (director)=>{
    return knex('movies').del().where("director",director)

}

// 16

let delete_data_by_name = (name) =>{
    return knex('movies').del().where("name",name)

}

// 17

let delete_data_by_language = (language) =>{
    return knex('movies').del().where("language",language)

}

// 18
let get_data_by_movies_id = (movies_id) =>{
    var id = (movies_id*10);
    var value =(id-10)

    return knex.select("*").from ('movies').whereBetween("movies_id",[value,id])
    
}

module.exports ={reda_data_by_director_name,inserted_data,read_data,update_data, delete_data,get_data_by_name,
    get_data_by_language,get_data_by_genre,get_data_by_runtime,update_data_by_name,
    update_data_by_genre,update_data_by_language,update_data_by_director_name,
    remove_data_by_genre,remove_data_by_director,delete_data_by_name,delete_data_by_language,
    get_data_by_movies_id}