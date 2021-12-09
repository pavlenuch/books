// import BookService from "./bookService.js"
const BookService = require("./bookService.js")

class BookController {
    async getAll(req, res) {
        try {
            const books = await BookService.getAll()
            return res.status(200).json(books)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports =  new BookController