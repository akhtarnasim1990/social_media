const express = require('express');
const Post = require('../models/post');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/posts' , auth , async(req , res) => {
    const post = new Post ({
        ...req.body,
        owner: req.user._id
    })

    try {
        await post.save()
        res.status(201).send(post);
    } catch (err) {
        res.status(400).send(err)
    }
})



router.get('/allpost' , auth , (req , res) => {
    Post.find()
    .then(posts => {
        res.json({posts})
    })
    .catch (err => {
        console.log(err)
    })
})



// router.get('/posts' , auth , async (req , res) => {
//     const match = {}
//     const sort = {}

//     if (req.query.completed) {
//         match.completed = req.query.completed === 'true'
//     }

//     if (req.query.sortBy) {
//          const parts = req.query.sortBy.split(':')
//          sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
//     }



//     try {
//         await req.user.populate({
//             path : 'posts' , 
//             match ,
//             options : {
//                 limit : parseInt(req.query.limit) ,
//                 skip : parseInt(req.query.skip),
//                 sort 
//             }
//         }).execPopulate()
//         res.send(req.user.posts)
//     } catch (err) {
//         res.status(500).send()
//     }
// })










module.exports = router;