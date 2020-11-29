const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const { config } = require('dotenv');

const Routes = require('./routes');

const app = express();

config();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', Routes);

mongoose.connet(process.env.MONGO_URI, (err) => {
    if (err)
        throw err;
})

app.listen(3000, () => {
    console.log(`server running in port ${3000}`)
})