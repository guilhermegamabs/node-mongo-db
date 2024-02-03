const { Router } = require('express');
const router = Router();

const User = require('../database/schemas/User');

router.post('/register', async(req, res) => {
    try { 
        const { firstName, lastName, isEmployed, age } = req.body;
        const user = await User.create({ firstName, lastName, isEmployed, age });
        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.get('/', async(req, res) => {
    try {
        const userDB = await User.find({});
        res.status(200).json({ userDB });
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

module.exports = router;