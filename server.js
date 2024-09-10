const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
const app = express();
const port = 4000;
const taskRouter = require('./routes/task');

app.use(express.json());

app.use(cors());


dotenv.config({path: './config.env'}); // טוען את משתני הסביבה מהקובץ .env

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose.connect(DB)
.then(() =>{
    console.log('DB is connected')

})

app.use('/api/tasks', taskRouter);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
