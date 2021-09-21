var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

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
res.send(ordersArray);
