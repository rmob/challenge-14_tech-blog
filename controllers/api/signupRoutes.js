const router = require('express').Router();
const { User } = require('../../models');
  
  // CREATE new user
  router.post('/', async (req, res) => {
    try {
      const dbUserData = await User.create({
        user_name: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
  
      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.user_id = dbUserData.id;
        res.status(200).json(dbUserData);
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;