import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import router from './routes/router.js'

const PORT = process.env.PORT || 80
const DB_URL = `mongodb+srv://Alex:123@cluster0.2lffu.mongodb.net/books_fullstack?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use(fileUpload({}))
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
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
            .then((res) => console.log('Connected to DB'))
        app.listen(PORT, () => console.log('Server started on port', PORT))
    } catch(e) {
        console.log(e)
    }
}

startApp()