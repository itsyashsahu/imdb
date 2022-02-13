const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    "Title":{
        type: String,
    },
    "Year":{
        type: String,
    },
    "Released":{
        type: Date
    },
    "Runtime":{
        type: String,
        required: true
    },
    "Genre":{        
        type:String,
    },
    "imdbID":{
        type:String,
    },
    "Upvotes":{
        type:Number,
        default:0
    },
    "Downvotes":{
        type:Number,
        default:0
    },
    "Poster":{
        type:String
    },
    "Director":{
        type:String,
    },
    "Actors":{
        type:String,
    },
    "Writer":{
        type:String,
    },
    "Language":{
        type:String,
    },
    "Plot":{
        type:String,
    },
},
{ timestamps: true })

module.exports = mongoose.models.Movie || mongoose.model('Movie',movieSchema )