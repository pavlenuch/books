// import mongoose from 'mongoose'
const mongoose = require("mongoose")

const Book = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    publication_date: { type: String, required: true },
    picture: {type: String}
})

module.exports =  mongoose.model('Book', Book)