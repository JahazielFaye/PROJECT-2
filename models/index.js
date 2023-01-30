const Submissions = require('./Submissions');
const User = require('./User');

User.hasMany(Submissions, {
  foreignKey: 'user_id',
});

Submissions.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Submissions };
