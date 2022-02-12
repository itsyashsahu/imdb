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
        type:[{
            type : String,
            }
        ]
    },
    "Upvotes":{
        type:Number,
        default:0
    },
    "Downvotes":{
        type:Number,
        default:0
    }
},
{ timestamps: true })

module.exports = mongoose.models.Movie || mongoose.model('Movie',movieSchema )