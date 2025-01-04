import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import chalk from 'chalk'
import cors from 'cors'
import mongoose from 'mongoose'
import userRouter from './router/userRouter.js'

//create express
const app = express()

//enable for form data/post man body data
app.use(express.json())

//load application env - values
dotenv.config({'path':'./Config/dev.env'})
let port = process.env.PORT
let hostname = process.env.HOSTNAME
let MongoDB_Url = process.env.MONGO_DB_URL_LINK

//create Application Root Request
app.get('/', (req, res) => {
    return res.json({"message":"Application/json..."})
})
//enable - http request logger using morgan
app.use(morgan('tiny'))

//enable cors
app.use(cors())

//route your application request
app.use('/user',userRouter )

//connnecto mongodb
mongoose.connect(MongoDB_Url)
.then((resp) => console.log('MongoDB Connected successfully...!'))
.catch((err) => console.log(err))

//server - configuration using listen
app.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(chalk.bgGray(`Server started and Running on ${hostname}:${port}`))
})