require('dotenv').config();

// Express
const express = require("express");
const app = express();
const PORT = process.env.PORT;

// Database
require('./database/db');

// Routes
const productRoute = require('./routes/product');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use('/products', productRoute);

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});