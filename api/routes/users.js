const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt')



//Update
router.put('/:id', async (req, resp) => {
    
    if(req.body.userId === req.params.id) {

        if(req.body.password) {

            const salt = await bcrypt.genSalt(10)

            req.body.password = await bcrypt.hash(req.body.password, salt)

        }

        try {
        
            const userUpdated = await User.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body
                },
                {
                    new: true
                }
            )

            resp.status(200).json(userUpdated)


        } catch (error) {
            resp.status(500).json(error)
        }

    } else {
        resp.status(401).json("usuário não encontrado!")
    }
    
})



module.exports = router
