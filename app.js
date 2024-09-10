const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const app = express();
const port = 3000

////////////////////////////
// import the config file.
dotenv.config({path: './config.env'})

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB)
.then(() =>{
    console.log('DB is connected')

})
app.listen(port, () =>{
    console.log('server is running on port: 3000')
})

