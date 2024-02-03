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

router.get('/:id', async(req, res) => {
    try{
        const { id } = req.params;
        const userDB = await User.findById({ _id: id });
        if(!userDB) {
            res.status(400).send({ message: "User doest not exists! "});
        } else {
            res.status(200).send(userDB);
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

router.put('/update/:id', async(req, res) => {
    try { 
        const { id } = req.params;
        const userDB = await User.findByIdAndUpdate(id, req.body);
        if(!userDB) {
            res.status(400).send({ message: "User doest not exists! "});
        } else {
            const userUpdated = await User.findById({ _id: id });
            res.status(200).send(userUpdated);
        }
    } catch(error) {
        res.status(500).send({ message: error });
    }
});

router.delete('/delete/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const userDB = await User.findByIdAndDelete(id);
        if(!userDB) {
            res.status(400).send({ message: 'User does not exists! '});
        } else {
            res.status(200).send({ messagE: 'User deleted successfully! '});
        }
    } catch(error) {
        res.status(500).send({ message: error });
    }
});

module.exports = router;