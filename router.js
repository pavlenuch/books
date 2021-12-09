// import Router from 'express'
// import BookController from './BookController.js'
const Router = require("express")
const BookController = require("./BookController.js")

const router = new Router()

router.get('/', BookController.getAll)

module.exports = router