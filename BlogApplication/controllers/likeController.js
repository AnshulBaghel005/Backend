const Like=require('../model/likeModel');
const Post=require('../model/postModel')

exports. likePost=async(req,res)=>{
    try{
    let {post,user}=req.body;
    const like=new Like({
        post,user
    })
    const saveLike=await like.save();
    const updatedPost=await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true})
                     .populate('likes')
                     .exec()
    res.json({
        post:updatedPost
    })
    }
    catch(err){
        return res.status(500).json({
            err:"error while unLiking post"
        });     
    }
    
    

}
//module.exports=likePost;

exports.unlikePost=async(req,res)=>{
    try{
        const {post,like}=req.body;
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like})

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true}

        );
        res.json({
            post:updatedPost
        })


    }
    catch(err){
        return res.status(500).json({
            err:"error while unLiking post"
        });     
    }
}
//module.exports=unlikePost;