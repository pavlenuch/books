import Book from './models.js'

class BookService {
    async getAll() {
        const books = await Book.find()
        return books
    }
}

export default new BookService