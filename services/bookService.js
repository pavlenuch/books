import Book from '../models/models.js'
import FileService from './fileService.js'

class BookService {
    async create(book, picture) {
        const fileName = FileService.saveFile(picture)
        const create_book = await Book.create({...book, picture: fileName})
        return create_book
    }

    async getAll() {
        const books = await Book.find()
        return books
    }

    async getOne(id) {
        if(!id) {
            throw new Error('ID не указан')
        }
        const book = await Book.findById(id)
        return book
    }

    async update(book) {
        if(!book._id) {
            throw new Error('ID не указан')
        }
        const update_book = await Book.findByIdAndUpdate(book._id, book, {new: true})
        return update_book
    }

    async delete(id) {
        if(!id) {
            throw new Error('ID не указан')
        }
        const delete_book = await Book.findByIdAndDelete(id)
        return delete_book
    }
}

export default new BookService