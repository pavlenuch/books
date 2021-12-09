import BookService from "../services/bookService.js"

class BookController {
    async create(req, res) {
        try {
            const book = await BookService.create(req.body)
            res.status(200).json(book)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            const books = await BookService.getAll()
            res.set('Access-Control-Allow-Origin', '*')
            return res.status(200).json(books)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const books = await BookService.getOne(req.params.id)
            return res.status(200).json(books)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async update(req, res) {
        try {
            const udate_book = await BookService.update(req.body)
            return res.json(udate_book)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async delete(req, res) {
        try {
            const delete_book = await BookService.delete(req.params.id)
            return res.json(delete_book)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new BookController