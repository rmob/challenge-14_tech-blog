const { User } = require('../models');

const userdata = [
  {}
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;