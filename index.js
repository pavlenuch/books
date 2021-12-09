// import express from 'express'
const express = require("express")
// import mongoose from 'mongoose'
const mongoose = require("mongoose")
// import fileUpload from 'express-fileupload'
// const fileUpload = require("fileUpload")
const router = require("./router.js")
// import router from './router.js'
// import corsMiddleware from './cors.middleware.js'
const corsMiddleware = require("./cors.middleware.js")
const config = require("config")
// import config from 'config'

// const PORT = process.env.PORT || 80
const PORT = config.get('serverPort')
// const DB_URL = `mongodb+srv://Alex:123@cluster0.2lffu.mongodb.net/books_fullstack?retryWrites=true&w=majority`

const app = express()

app.use(corsMiddleware)
app.use(express.json())
app.use(express.static('static'))
app.use('/', router)

// app.get('/', (req, res)=>{
//     res.end('<h1>Home Page1</h1>')
// })

// app.get('/about', (req, res)=>{
//     res.end('<h1>About Page</h1>')
// })

async function startApp() {
    try {
        await mongoose.connect(config.get("dbUrl"), { useUnifiedTopology: true, useNewUrlParser: true })
            .then((res) => console.log('Connected to DB'))
        app.listen(PORT, () => console.log('Server started on port', PORT))
    } catch(e) {
        console.log(e)
    }
}

startApp()