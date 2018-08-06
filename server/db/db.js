const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const databaseName = 'retrosheet';

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `mysql://root:Tue12:23@localhost:3306/${databaseName}`,
  {
    logging: true,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
);

module.exports = db;
// module.exports = Events;

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close());
}
