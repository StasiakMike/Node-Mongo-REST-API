const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//get all posts
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find(); 
        res.json(posts);
    }catch{
        res.json({message: err});
    }
});

//sends a post
router.post('/', async (req, res) => {
    //console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
    const savedPost= await post.save();
    res.json(savedPost);
    }catch(err){
        res.json({ message: err });
    }
});

//get single post
router.get('/:postId', async (req,res) => {
    try{
        const post = await Post.finfById(req.params.postID);
        res.json(post);
    }catch (err){
        res.json({message: err});
    } 
});

//delete post
router.delete('/:postId', async (req,res) => {
    try{
        const postRemoved = await Post.remove({_id: req.params.postId});
        res.json(postRemoved);
    }catch (err){
        res.json({message: err});
    } 
});

//update post
router.patch('/:postId', async (req,res) => {
    try{
        const postUpdated = await Post.updateOne({_id: req.params.postId},
             { $set: {title: req.body.title} });
        res.json(postUpdated);
    }catch (err){
        res.json({message: err});
    } 
});

module.exports = router;