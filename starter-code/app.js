console.log('hello backend file');
//use npm install to get packages


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


// How do we 'require' the candyRouter file?
const candyRouter = require('./candyRouter.js');



// parse the eventual list of candies
app.use(bodyParser.json());

// redirect the /candies path
app.use('/candies', candyRouter);

app.listen(port);

