import Router from 'express'
import BookController from '../controllers/BookController.js'

const router = new Router()

router.post('/create', BookController.create)
router.get('/books', BookController.getAll)
router.get('/cardbook/:id', BookController.getOne)
router.put('/editbook', BookController.update)
router.delete('/book/:id', BookController.delete)

export default router