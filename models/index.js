const User = require('./User');
const Entry = require('./Entry');
const Comment = require('./Comment');

// Gallery.hasMany(Painting, {
//   foreignKey: 'gallery_id',
// });

// Painting.belongsTo(Gallery, {
//   foreignKey: 'gallery_id',
// });

module.exports = { User, Entry, Comment };
