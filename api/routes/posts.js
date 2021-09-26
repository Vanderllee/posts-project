const router = require('express').Router();
const Post = require('../models/Post');





// Create new post
router.post('/', async (req, res) => {
    const newPost = new Post(req.body)

    try {
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)

    } catch (err) {
        res.status(500).json(err)
    }
    
})


//Update post

router.put('/:id', async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {
            
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, 
                    {$set: req.body}, 
                    {new: true}
                )
                res.status(200).json(updatedPost)
            } catch (err) {
                res.status(500).json(err)
            }

        } else {
            res.status(401).json('Você só pode atualizar o seu post.')
        }

        

    } catch(err) {
        res.status(500).json(err)
    }
    
})

//Delete post
router.delete('/:id', async (req, res) => {
    
    try {
        const post = await Post.findById(req.params.id)

        if(post.username === req.body.username) {
            
            try {      
                await post.delete()
                
                res.status(200).json("Post deletado com sucesso!")
            } catch (err) {
                res.status(500).json(err)
            }

        } else {
            res.status(401).json('Você só pode deletar o seu post.')
        }

        

    } catch(err) {
        res.status(500).json(err)
    }
    
})


//Get post
router.get('/:id', async (req, res) => {

    try {
        const post = await Post.findById(req.params.id)

        res.status(200).json(post)

    } catch (err) {
        res.status(500).json(err)
    }
})

//Get all posts
router.get('/', async (req, res) => {

    const username = req.query.user
    const catName = req.query.cat

    try {
        
        let posts;

        if(username) {
            posts = await Post.find({ username }) // todos os posts que tem esse nome
        } else if (catName){
            posts = await Post.find({categories: { $in: [ catName ] }}) // todos os posts que tem esse categories name
        } else {
            posts = await Post.find() // todos os posts 
        }

        res.status(200).json(posts)

    } catch (err) {
        res.status(500).json(err)
    }
})


module.exports = router
