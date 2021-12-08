import BookService from "../services/bookService.js"

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

export default new BookController