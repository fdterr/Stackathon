const router = require('express').Router();
const db = require('../db/db');
const DataTypes = require('sequelize/lib/data-types');
const Events = require('../db/models/events')(db, DataTypes);
const Games = require('../db/models/games')(db, DataTypes);
// const Sequelize = require('sequelize');
// const Models = require('../db/models');
// const Events = Models.Events;
// const User = require('../db/models/user');
// const Events = require('../db/models/events')(Sequelize, DataTypes);

module.exports = router;

// router.use('/', async (req, res, next) => {
//   console.log('hit this route!', Events);
//   try {
//     // const result1 = await User.findOne({
//     //   where: {
//     //     YEAR_ID: '1952',
//     //   },
//     // });
//     // console.log('RESULT1: ', result1);
//     const result = await Events.findOne({
//       where: {
//         YEAR_ID: '1952',
//       },
//     });
//     console.log('RESULT: ', result);
//     // res.status(201).end();
//     res.json(result);
//   } catch (err) {
//     console.log('caught error!');
//     next(err);
//   }
// });

// Games.belongsToMany(Events, { through: 'GAME_ID' });
Events.hasMany(Games, { foreignKey: 'GAME_ID' });

router.use('/test', async (req, res, next) => {
  console.log('hit games route', Games);
  try {
    const result = await Games.findOne({
      where: {
        YEAR_ID: '1952',
      },
      include: [Events],
      attributes: ['GAME_ID'],
      // include: {
      //   model: Events,
      //   through: {
      //     attributes: ['GAME_ID'],
      //   },
      // },
    });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
});

router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
