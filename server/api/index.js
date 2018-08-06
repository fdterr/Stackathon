const router = require('express').Router();
const db = require('../db/db');
const DataTypes = require('sequelize/lib/data-types');
const Events = require('../db/models/events')(db, DataTypes);
const Games = require('../db/models/games')(db, DataTypes);
const records = require('../db/models/records')(db, DataTypes);
const game_records = require('../db/models/game_records')(db, DataTypes);
const axios = require('axios');

module.exports = router;
// Events.hasMany(Games, { foreignKey: 'GAME_ID' });
// Games.belongsTo(Events, { as: 'games', foreignKey: 'GAME_ID' });
// Events.belongsTo(Games, { foreignKey: 'GAME_ID' });
// Games.hasMany(Events, { foreignKey: 'GAME_ID' });

// Events.belongsToMany(Games, { through: 'GAME_ID' });
// Games.belongsToMany(Events, { through: 'GAME_ID' });

router.use('/', async (req, res, next) => {
  console.log('hit this route!', Events);
  try {
    const result = await Events.findAll({
      where: {
        YEAR_ID: '1952',
        GAME_ID: 'BOS195204180',
        INN_CT: '1',
      },
      include: [Games],
    });
    console.log('RESULT: ', result);
    // res.status(201).end();
    res.json(result);
  } catch (err) {
    console.log('caught error!');
    next(err);
  }
});

// router.use('/scrape', async (req, res, next) => {
//   try {
//     // const response = await request({
//     //   url: 'http://statsapi.mlb.com:80/api/v1/schedule?sportId=1',
//     //   json: true,
//     // });
//     // console.log('response2', response);
//     setInterval(async () => {
//       const data = await axios(
//         'http://statsapi.mlb.com/api/v1/game/531089/feed/live'
//       );
//       const temp = data.data;
//       console.log('TEMP: ', temp);
//       game_records.create({
//         json: JSON.stringify(temp),
//       });
//     }, 20000);
//     res.send(temp);
//     res.end();
//   } catch (err) {
//     next(err);
//   }
// });

// router.use('/test', async (req, res, next) => {
//   console.log('hit games route', Games);
//   try {
//     const result = await Games.findOne({
//       where: {
//         YEAR_ID: '1952',
//       },
//       include: [Events],
//       attributes: ['GAME_ID'],
//       // include: {
//       //   model: Events,
//       //   through: {
//       //     attributes: ['GAME_ID'],
//       //   },
//       // },
//     });
//     res.status(201).json(result);
//   } catch (err) {
//     next(err);
//   }
// });

router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
