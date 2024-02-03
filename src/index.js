require('dotenv').config();

// Express
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Database
require('./database/db');

// Routes
const productRoute = require('./routes/product');
const userRoute = require('./routes/user');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use('/products', productRoute);
app.use('/users', userRoute);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});