const router = require('express').Router();

const User = require('../models/User')


//Register
router.post('/register', async (req, resp) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })

        const user = await newUser.save()

        resp.status(200).json(user)

    } catch (error) {
        resp.status(500).json(error)
    }
})

module.exports = router
