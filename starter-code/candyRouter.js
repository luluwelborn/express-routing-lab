console.log('hello candy router');

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


// create candies array
const candies = [
                {	"id": 1,
                	"name": "Chewing Gum",
                	"color": "red",
            	},
            	{	"id": 2,
                	"name": "Pez",
                	"color": "green",
            	},
            	{	"id": 3,
                	"name": "Marshmallow",
                	"color": "pink",
            	},
            	{	"id": 4,
                	"name": "Candy Stick",
                	"color": "blue",
            	},
               ];

// restful endpoint setup for candies api
router.get('/', function(req,res) {
	//INDEX
	res.send(candies);
	// Hint: we want all candies in JSON format
});

router.get('/:id', function(req, res) {
	// SHOW me the array items
  	res.send(candies[req.params.id - 1]);
});

router.post('/:id', function(req, res) {
	// CREATE new item and push to the body, then get back
	// This DOES add a 5th array item
	candies.push(req.body);
	res.send(req.body);
});

router.put('/:id', function(req, res) {
    // update array item
    candies[req.params.id - 1]=req.body;
    res.send(req.body);
    console.log("mallow is white!");
});

router.delete('/:id', function(req, res) {
    candies.splice(req.params.id-1,1);
    res.send({"message":"deleted"});
});

// Fill out the rest of the routes here

module.exports = router;

