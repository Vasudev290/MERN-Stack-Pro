import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import dotenv from "dotenv";
import mongoose from 'mongoose';


//Config
dotenv.config()

//rest object
const app = express();

//server set-up
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));

//port set-up
const PORT = process.env.PORT || 6969;
const HOSTNAME = process.env.HOSTNAME ||'http://localhost:6969/';

//MongoDB Database connections
mongoose.connect(process.env.MONGO_DB_URL)
.then(() => {
    console.log(chalk.white(`MongoDB Database Connected Successfull..!`))
})
.catch((err) => {
    console.log(err)
})

//listen server
app.listen(PORT, () => {
    console.log(chalk.white(`Server Started ${PORT} and running successfully on ${HOSTNAME}`))
})

