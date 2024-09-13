const Post = require('../model/blog');
module.exports.getHome = async (req,res,next)=>{
    try{
    const posts = await Post.find();
        res.render('home',{posts});
    }
    catch(err){
        next(err);
    }
}