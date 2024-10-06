// require('dotenv').config({path:'./env'})   consistency not there 
import dotenv from 'dotenv';

//in express we can use body parser , multer (for file uploading)
import connectDB from "./db/index.js ";
import { app } from './app.js';
dotenv.config({
    path: './.env',
})
// in db always think about async await and try catch cuz db is in other continent
//we are using it more often so we will create it in utils for further use

connectDB()
.then(()=>{
    app.on(
        'error',
        (err) => {
            console.error('Error:', err);
            }
    )
    app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port ${process.env.PORT}`)
    });
})
.catch((err) => {
    console.log("MONGODB connection failed",err);
})