const User = require('./user');
const db = require('../db');
const DataTypes = require('sequelize/lib/data-types');
const Events = require('./events')(db, DataTypes);
const Games = require('./games')(db, DataTypes);

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

// Games.belongsTo(Events, { through: 'GAME_ID' });

// module.exports = {
//   Events,
//   Games,
// };
