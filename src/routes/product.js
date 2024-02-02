const { Router } = require('express');
const router = Router();

const Product = require('../database/schemas/Product');


router.post('/register', async(req, res) => {
    try {
        const { name, quantity, price, image } = req.body;
        const productDB = await Product.findOne({ name });
        if(productDB) {
            res.status(400).send({ message: 'Product already exists' });
        } else {
            const product = await Product.create({ name, quantity, price, image });
            res.status(201).json(product);    
        }
    } catch(error) {
        res.status(500).json({ message: error});
    }
});

router.get('/', async(req, res) => {
    try {
        const productDB = await Product.find();
        res.status(200).json({ productDB });
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const productDB = await Product.findById({ _id: id });
        if(!productDB) {
            res.status(400).send({ message: 'Product does not exists!' });
        } else {
            res.status(200).send(productDB);
        }
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.put("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const productDB = await Product.findByIdAndUpdate(id, req.body);
        if(!productDB) {
            res.status(400).send({ message: 'Product does not exists!' });
        } else {
            const productUpdate = await Product.findById({ _id: id });
            res.status(200).send(productUpdate); 
        }
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.delete("/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const productDB = await Product.findByIdAndDelete(id);
        if(!productDB) {
            res.status(400).send({ message: 'Product does not exists!' });
        }  else {
            res.status(200).send({ message: 'Product deleted successfully!' })
        }
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router;