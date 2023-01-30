const sequelize = require('../config/connection');
const { User, Submissions } = require('../models');

const userData = require('./userData.json');
const feedData = require('./feedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);

  await Submissions.bulkCreate(feedData);

  process.exit(0);
};

seedDatabase();
