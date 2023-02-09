const { User } = require("../models");

const userdata = [
  {
    user_name: "Riley",
    email: "riley.obryan@gmail.com",
    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
