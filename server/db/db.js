var path = require('path');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const databaseName = 'retrosheet';
const DataTypes = require('sequelize/lib/data-types');
// pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `mysql://root:Tue12:23@localhost:3306/${databaseName}`,
  {
    logging: false,
    dialect: 'mysql',
    define: {
      timestamps: false,
    },
  }
);
// const Events = db.import('events', require('./models/events.js'));
// const Events = require('./models/events')(db, DataTypes);
// const models = require('sequelize-auto-import')(
//   db,
//   path.join(__dirname, '/models/events')
// );

module.exports = db;
// module.exports = Events;

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close());
}
