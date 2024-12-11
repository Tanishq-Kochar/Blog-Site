const Post = require("../model/blog"); 
module.exports.getNew = (req,res,next)=>{
    try{
        res.render('new-post');
    }
    catch(err){
        next(err);
    }
}
module.exports.postNew = async (req, res, next) => {
    const { title, content, author,imageUrl } = req.body;
  
    try {
      await Post.create({
        title,
        content,
        author,
        imageUrl
      });
      res.redirect("/");
    } catch (err) {
      next(err);
      // const {data} = err;
      // console.log(data);
      // alert(data.msg);
    }
  };
  
module.exports.getReadPage = async (req, res, next) => {
    const { id } = req.params;
    try {
      let post = await Post.findById(id);
    //   console.log(post);
      res.render("read", { post });
    } catch (err) {
      next(err);
    }
  };

  module.exports.getEditPage = async (req, res, next) => {
    const { id } = req.params;
    try {
      const post = await Post.findById(id);
    //   console.log(post, id);
      res.render("edit", { post, id });
    } catch (err) {
      next(err);
    }
  };

  module.exports.postEdit = async (req, res, next) => {
    const { title, id, author, content,imageUrl  } = req.body;
    try {
    //   console.log(id);
      let p = await Post.findById(id);
    //   console.log("Post: ", p);
      p.title = title;
      p.author = author;
      p.content = content;
      p.imageUrl = imageUrl;
      await p.save();
      res.redirect("/");
    } catch (err) {
      next(err);
    }
  };

  module.exports.getDeletePost = async (req, res, next) => {
    const { id } = req.params;
    try {
      let p = await Post.findByIdAndDelete(id);
      res.redirect("/");
    } catch (err) {
      res.send(err);
    }
  };
  