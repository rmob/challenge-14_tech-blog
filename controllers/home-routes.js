const router = require("express").Router();
const { Entry, Comment, User } = require("../models");

// GET all entries for homepage
router.get("/", async (req, res) => {
  try {
    const dbEntryData = await Entry.findAll();
      // {include: [{Comment.user_name}]}();
    
    const entries = dbEntryData.map((entry) => entry.get({ plain: true }));
    console.log(entries);

    res.render("homepage", {
      entries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err, "THIS IS ERROR MESSAGE");
    res.status(500).json(err);
  }
});

// GET one gallery
// router.get('/entry/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     // If the user is logged in, allow them to view the gallery
//     try {
//       const dbEntryData = await Entry.findByPk(req.params.id, {
//         include: [
//           {
//             model: Comment,
//             attributes: [
//               'id',
//               'title',
//               'user_name',
//               'content',
//               'comment_date'
//             ],
//           },
//         ],
//       });
//       const entry = dbEntryData.get({ plain: true });
//       res.render('entry', { entry, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

// GET one painting
// router.get('/painting/:id', async (req, res) => {
//   // If the user is not logged in, redirect the user to the login page
//   if (!req.session.loggedIn) {
//     res.redirect('/login');
//   } else {
//     // If the user is logged in, allow them to view the painting
//     try {
//       const dbPaintingData = await Painting.findByPk(req.params.id);

//       const painting = dbPaintingData.get({ plain: true });

//       res.render('painting', { painting, loggedIn: req.session.loggedIn });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   }
// });

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
