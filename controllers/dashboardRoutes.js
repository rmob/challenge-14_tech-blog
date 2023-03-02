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

  router.get('/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    console.log('route hit')
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the gallery
      try {
        const dbEntryData = await Entry.findByPk(req.params.id, {
          include: [
            {
              model: Comment,
              attributes: [
                'id',
                'user_name',
                'content',
              ],
            },
          ],
        });
        const entry = dbEntryData.get({ plain: true });
        res.render('single-entry-dashboard', { entry, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });

  router.get('/edit/:id', async (req, res) => {
    // If the user is not logged in, redirect the user to the login page
    console.log('route hit')
    if (!req.session.loggedIn) {
      res.redirect('/login');
    } else {
      // If the user is logged in, allow them to view the gallery
      try {
        const dbEntryData = await Entry.findByPk(req.params.id, {
          include: [
            {
              model: Comment,
              attributes: [
                'id',
                'user_name',
                'content',
              ],
            },
          ],
        });
        const entry = dbEntryData.get({ plain: true });
        res.render('edit-dashboard', { entry, loggedIn: req.session.loggedIn });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }
  });

  // NEED JS FOR THESE PUT AND DELETE ROUTES
  router.put('/edit/:id', async (req, res) => {
    Entry.update({
      content: req.body.content,
      title: req.body.title
    },
    {
      where: {id: req.params.id}
    })
    .then(dbEntryData => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbEntryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.delete('/edit/:id', (req, res) => {
    Entry.destroy({
      where: {id: req.params.id}
    })
    .then(dbEntryData => {
      if (!dbEntryData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbEntryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
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