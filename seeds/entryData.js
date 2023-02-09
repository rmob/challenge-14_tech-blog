const { Entry } = require("../models");

const entrydata = [
  {
    user_name: "Cyrus",
    title: "First blog post",
    post_date: 'Jan 1 2023',
    content: "Text content for first blog post",
  },
  {
    user_name: "Riley",
    title: "Second blog post",
    post_date: 'Jan 1 2023',
    content: "Text content for second blog post",
  },
];

const seedEntry = () => Entry.bulkCreate(entrydata);

module.exports = seedEntry;
