const Comment=require('../model/commentModel');
const Post=require('../model/postModel');

exports.createComment=async(req,res)=>{
    try{
    let {post,user,body}=req.body;
    let comment=new Comment({
        post,user,body
    });
    const saveComment=await comment.save();
    const updatePost=await Post.findByIdAndUpdate(post,{$push:{comments:saveComment._id}},{new:true})
                     .populate('comments')
                     .exec();
    res.json({
        post:updatePost,
    });                 


    }
    catch(err){
        return res.status(500).json({
            error:"Error while creating comment"
        })
    }
   
}
//module.exports=createComment;