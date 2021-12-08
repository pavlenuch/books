import Router from 'express'
import BookController from '../controllers/BookController.js'

const router = new Router()

router.get('/', BookController.getAll)

export default router