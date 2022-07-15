//declaracion de herraminetas a utilizar

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api');

const app = express();

require('./db');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api', apiRouter);

app.listen(3001,()=>{
    console.log('Servidor up');
});