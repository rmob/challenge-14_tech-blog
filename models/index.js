const User = require('./User');
const Entry = require('./Entry');
const Comment = require('./Comment');

// User.hasMany(Entry, {
//   foreignKey: 'gallery_id',
// });

// Entry.belongsTo(User, {
//   foreignKey: 'gallery_id',
// });

// User.hasMany(Comment, {
//   foreignKey: '',
// });

// Comment.belongsTo(User, {
//   foreignKey: '',
// })

// Comment.belongsTo(Entry, {
//   foreignKey: '',
// })

// Entry.hasMany(Comment, {
//   foreignKey: '',
// })


module.exports = { User, Entry, Comment };
