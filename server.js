//filename : server.js

// Example using Express.js
const express = require('express');
const app = express();
//Defining routs in express

// Example defining a route in Express
app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server!</h1>');
});


//include route files
const usersRoute = require('./routes/users');
const productsRoutes= require('./routes/products');

app.use('/users',usersRoute);
app.use('/products', productsRoutes);


// Example specifying the port and starting the server
const port = process.env.PORT || 3000; // You can use environment variables for port configuration


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});






