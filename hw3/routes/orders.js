// Create an array whose objects have two properties
const ordersArray = [
    {
        toppings: "cherry",
        quantity: 2
    },
    {
        toppings: "plain",
        quantity: 6
    },
    {
        toppings: "chocolate",
        quantity: 3
    }
];

// Convert the array to Json format
const myJsonArray = JSON.stringify(ordersArray);

// Send to the localhost client
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
  res.send(ordersArray);
});

res.status(404).end();

module.exports = router;

