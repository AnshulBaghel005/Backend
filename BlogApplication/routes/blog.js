const express=require('express');
const router=express.Router();

const {createPost,getAllPosts}=require('../controllers/postController');
const {createComment}=require('../controllers/commentController');
const {likePost,unlikePost}=require('../controllers/likeController');

router.post('/posts/create',createPost);
router.post('/comments/create',createComment);
router.post('/likes/like',likePost);
router.post('/likes/unlike',unlikePost);
router.get('/posts',getAllPosts);

module.exports=router;