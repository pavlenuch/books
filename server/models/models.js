import mongoose from 'mongoose'

const Book = new mongoose.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    publication_date: { type: String, required: true },
    picture: { type: String, required: true }
})

export default mongoose.model('Book', Book)