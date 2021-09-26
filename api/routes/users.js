const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post')
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


//Delete

router.delete('/:id', async (req, resp) => {
    
    if(req.body.userId === req.params.id) {

        try {

            const user = await User.findById(req.params.id)
            
            try {
                await Post.deleteMany({username: user.username})
                await User.findByIdAndDelete(req.params.id)

                resp.status(200).json('Usuario deletado com sucesso!')

            } catch(error) {
                resp.status(500).json(error)
            }
        

        } catch (error) {
            resp.status(404).json("Usuário não encontrado!")
        }

    } else {
        resp.status(401).json("usuário não encontrado!")
    }
    
})

//get user
router.get('/:id', async (req, res) => {

    try {
        const user = await User.findById(req.params.id)

        const { password, ...others } = user._doc

        res.status(200).json(others)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router
