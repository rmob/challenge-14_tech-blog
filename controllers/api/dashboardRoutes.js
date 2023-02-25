const router = require("express").Router();
const { Entry, Comment, User } = require("../../models");
const withAuth = require('../../utils/auth');

// GET all entries for homepage
router.get("/", async (req, res) => {
    try {
      const dbEntryData = await Entry.findAll({
          include: [{ model: User, Comment }]
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