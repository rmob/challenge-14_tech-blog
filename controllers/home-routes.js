const router = require("express").Router();
const { Entry, Comment, User } = require("../models");
const withAuth = require('../utils/auth');

// GET all entries for homepage
router.get("/", async (req, res) => {
  try {
    const dbEntryData = await Entry.findAll({
        include: [{ model: User, Comment }]
    });
    
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

// GET one entry
router.get('/entry/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
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
              'user_id',
              'entry_id',
              'content',
              'user_name'
            ],
          },
          { 
            model: User,
          //   attributes: [
          //     'user_name',
          //     'id'
          // ],
        },
        ],
      });
      const entry = dbEntryData.get({ plain: true });
      console.log(entry)
      res.render('entry', { entry, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

// To Add Comment to Entry
router.post("/entry/:id", async (req, res) => {
  console.log('route hit')
  try {
  
      const newComment = await Comment.create({
          content: req.body.content,
          username: req.body.user_name,
          user_id: req.session.user_id,
          entry_id: req.body.entry_id,
          
      });
      
      res.status(200).json(newComment);
      } catch (err) {
          res.status(400).json(err);
      }
      
  });

// Get create entry form page
router.get("/create", async (req, res) => {
      try {
          const entryData = await Entry.findAll()
  
          res.render('create-entry', {
              loggedIn: req.session.loggedIn
          })
      } catch (err) {
          console.log(err, "THIS IS ERROR MESSAGE");
          res.status(500).json(err);
        }
  })

  // GET route for add comment
  // router.get('/comment', async (req, res) => {
  //   res.render('comment', {
  //     loggedIn: req.session.loggedIn
  //   })
  // })

  // GET Signup route
router.get('/signup', async (req, res) => {
  res.render('signup')
})


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
