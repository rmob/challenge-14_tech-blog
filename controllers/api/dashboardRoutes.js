const router = require("express").Router();
const { Entry, Comment, User } = require("../../models");
const withAuth = require('../../utils/auth');

// GET all entries for homepage
router.get("/", async (req, res) => {
    try {
      const dbEntryData = await Entry.findAll({
          include: [{ model: User, Comment }]
        //   where: user_id: req.params.id
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

router.get("/create", (req, res) => {
    res.render('create-entry')
})

router.post("/create", async (req, res) => {
        try {
            const dbEntryData = await Entry.create({
              title: req.body.title,
              content: req.body.content,
            });

            res.render("dashboard", {
                entries,
                loggedIn: req.session.loggedIn,
              });
            } catch (err) {
              console.log(err, "THIS IS ERROR MESSAGE");
              res.status(500).json(err);
            }
    }
)

module.exports = router