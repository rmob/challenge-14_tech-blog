const router = require("express").Router();
const { Entry, Comment, User } = require("../../models");
const withAuth = require('../../utils/auth');



// router.post("/entry/:id", async (req, res) => {
//     console.log('route hit')
//     try {
    
//         const newComment = await Comment.create({
//             content: req.body.content,
//             username: req.body.user.name,
//             user_id: req.session.user_id,
//             entry_id: req.body.entry_id,
            
//         });
        
//         res.status(200).json(newComment);
//         } catch (err) {
//             res.status(400).json(err);
//         }
        
//     });

module.exports = router