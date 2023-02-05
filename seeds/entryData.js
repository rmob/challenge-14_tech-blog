const { Entry } = require("../models");

const entrydata = [
  {
    title: "First blog post",
    date: "Jan 1 2023",
    content: "Text content for first blog post",
  },
];

const seedEntry = () => Entry.bulkCreate(entrydata);

module.exports = seedEntry;
