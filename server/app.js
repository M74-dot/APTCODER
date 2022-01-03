const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({ path: './config.env' });
require('./db/conn');

app.use(express.json());
app.use(require('./router/auth'));

const PORT = process.env.PORT;

// Middleware
// const middleware = (req,res,next) => {
//     console.log('middleware');
//     next();
// }

// middleware();

app.listen(PORT , ()=>{
    console.log('running at port 8002');
})