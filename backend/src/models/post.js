const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId ,
        required : true ,
        ref : 'User'
    }
}, {
    timestamps: true
})

const Post = mongoose.model('Post' , postSchema);

module.exports = Post;