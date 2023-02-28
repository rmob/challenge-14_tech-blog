const router = require("express").Router();
const { Entry, Comment, User } = require("../models");
const withAuth = require('../utils/auth');

// GET all entries for dashboard
router.get("/", async (req, res) => {
    try {
      const dbEntryData = await Entry.findAll({
          include: [{ model: User, Comment }],
           where: {user_id: req.session.user_id}
      });
      
      const entries = dbEntryData.map((entry) => entry.get({ plain: true }));
      console.log(entries);
  
      res.render("dashboard", {
        entries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err, "THIS IS ERROR MESSAGE");
      res.status(500).json(err);
    }
  });

module.exports = router

// router.get("/", async (req, res) => {
//     try {
//       const dbTripData = await Trip.findAll({
  
//         attributes: ["id", "location", "created_at", "trip_description"],
//         include: [
//           {
//             model: Comment,
//             attributes: ['id','user_id','trip_id','comment_text','created_at'],
//             include: {
//               model: User,
//               attributes: ['username']
//             }
//           },
//           {
//             model: User,
//             attributes: ["username"],
//           },
//         ],
//       });
  
//       const trips = dbTripData.map((trip) => trip.get({ plain: true }));
  
//       res.render('homepage', {
//         trips,
//         loggedIn: req.session.loggedIn,
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });