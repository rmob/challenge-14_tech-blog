const User = require('./User');
const Entry = require('./Entry');
const Comment = require('./Comment');

User.hasMany(Entry, {
  foreignKey: 'user_id',
});

Entry.belongsTo(User, {
  foreignKey: 'user_id',
});

Entry.hasMany(Comment, {
  foreignKey: 'entry_id',
});

Comment.belongsTo(Entry, {
  foreignKey: 'entry_id',
})

// Comment.belongsTo(Entry, {
//   foreignKey: '',
// })

// Entry.hasMany(Comment, {
//   foreignKey: '',
// })


module.exports = { User, Entry, Comment };
