import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import router from './routes/router.js'
import fileUpload from 'express-fileupload'

const app = express()

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useUnifiedTopology: true, useNewUrlParser: true })
            .then((res) => console.log('Connected to DB'))
        app.listen(process.env.PORT, () => console.log('Server started on port', `${process.env.PORT}`))
    } catch(e) {
        console.log(e)
    }
}

startApp()