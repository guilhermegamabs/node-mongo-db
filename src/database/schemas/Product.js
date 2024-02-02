const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a product name."]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter a quantity of products."],
    },
    price: {
        type: Number,
        required: [true, "Please enter a price of the product."],
    },
    image: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('products', ProductSchema);