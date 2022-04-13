const express = require('express');
const path = require('path');
const router = express.Router();
const blog = require('../data/data.js');

router.get('/',(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/index.html'))
    res.render('home',{
        blogs:blog
    });
  
});
router.get('/about/:slug',(req,res)=>{
let myBlog = blog.filter(e=>{
    return (e.slug==req.params.slug);
})
// res.sendFile(path.join(__dirname,'../data/data.js'))
res.render('blog.handlebars',{
title:myBlog[0].title,
content:myBlog[0].content
});
});



module.exports = router;