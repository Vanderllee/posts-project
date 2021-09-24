const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');



//Register
router.post('/register', async (req, resp) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)



        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass
        })

        const user = await newUser.save()

        resp.status(200).json(user)

    } catch (error) {
        resp.status(500).json(error)
    }
})

module.exports = router
