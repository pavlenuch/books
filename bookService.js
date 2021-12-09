// import Book from './models.js'
const Book = require("./models.js")

class BookService {
    async getAll() {
        const books = await Book.find()
        return books
    }
}

module.exports =  new BookService