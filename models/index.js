const Submissions = require('./submissions');
const User = require('./user');

User.hasMany(Submissions, {
  foreignKey: 'user_id',
});

Submissions.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Submissions };
