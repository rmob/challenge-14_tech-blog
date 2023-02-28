const router = require("express").Router();
const { Entry, Comment, User } = require("../../models");
const withAuth = require('../../utils/auth');



router.post("/", async (req, res) => {
    console.log('route hit')
    try {
    
        const newBlog = await Entry.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
            
        });
        
        res.status(200).json(newBlog);
        } catch (err) {
            res.status(400).json(err);
        }
        
    });

module.exports = router