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

//Login

router.post('/login', async (req, resp) => {

    const userFromDB = await User.findOne({username: req.body.username})

    !userFromDB && resp.status(400).json('usuário não encontrado!')

    const validated = await bcrypt.compare(req.body.password, userFromDB.password)

    !validated && resp.status(400).json('usuário não encontrado!')

    const { password, ...others } = userFromDB._doc

    resp.status(200).json(others)
})

module.exports = router
