const { Comment } = require('../models');

const commentdata = [
  {
    user_name: 'Beyonce',
    date: Date.now(),
    content: 'This is a comment on a previous post'


  }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;