const router = require('express').Router();
const db = require('../db/db');
const DataTypes = require('sequelize/lib/data-types');
const Events = require('../db/models/events')(db, DataTypes);
const Games = require('../db/models/games')(db, DataTypes);
const records = require('../db/models/records')(db, DataTypes);
const game_records = require('../db/models/game_records')(db, DataTypes);
const Probabilities = require('../db/models/probabilities')(db, DataTypes);
const axios = require('axios');
const Sequelize = require('sequelize');

module.exports = router;

Events.belongsTo(Games, { foreignKey: 'GAME_ID', as: 'game' });
Games.belongsTo(Events, {
  as: 'game',
  foreignKey: 'GAME_ID',
});

// router.use('/', async (req, res, next) => {
//   console.log('hit this route!', Events);
//   try {
//     const result = await Events.findAll({
//       where: {
//         YEAR_ID: '1952',
//         GAME_ID: 'BOS195204180',
//         INN_CT: '1',
//       },
//       include: { model: Games, as: 'game' },
//     });
//     console.log('RESULT: ', result);
//     // res.status(201).end();
//     res.json(result);
//   } catch (err) {
//     console.log('caught error!');
//     next(err);
//   }
// });

router.put('/calculate', async (req, res, next) => {
  const query = buildQuery(req.body);

  try {
    const response = await Events.findAndCountAll({
      where: query,
      include: {
        model: Games,
        as: 'game',
      },
      attributes: [
        'GAME_ID',
        'YEAR_ID',
        'HOME_TEAM_ID',
        'AWAY_TEAM_ID',
        'HOME_SCORE_CT',
        'AWAY_SCORE_CT',
      ],
    });
    const runDifferential = situation.homeScore - situation.awayScore;

    // make array of game IDs, put into object for instant lookup
    let gameIds = [];
    let gameRecords = {};
    // response.rows.forEach(row => {
    //   if()
    // })
    console.log('resonse: ', response.rows[0].dataValues);

    // console.log('YOUR QUERY HERE', query);
    res.end();
  } catch (err) {
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

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

const buildQuery = req => {
  console.log('original request: ', req);
  const situation = req.situation;
  let query = {};
  query['Outs'] = +situation.outs;
  query['Bases'] = +situation.runners;
  if (situation.batting == 'homeTeam') {
    query = { ...query, Team: 'H' };
  } else {
    query = { ...query, Team: 'V' };
  }
  query.Inning = +situation.inning;
  console.log(query);
  return query;
};
