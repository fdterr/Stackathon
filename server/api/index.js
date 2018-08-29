const router = require('express').Router();
const db = require('../db/db');
const DataTypes = require('sequelize/lib/data-types');
const Probabilities = require('../db/models/probabilities')(db, DataTypes);
const axios = require('axios');
const Sequelize = require('sequelize');
module.exports = router;

router.use('/games', require('./games'));

router.put('/calculate', async (req, res, next) => {
  // console.log('REQUEST: ', req.body);
  const query = buildQuery(req.body);
  // console.log('QUERY: ', query);

  try {
    const response = await Probabilities.findAndCountAll({
      where: query,
    });

    // console.log('resonse: ', response.rows[0].dataValues);
    const probability =
      response.rows[0].dataValues.TotalWins /
      response.rows[0].dataValues.TotalGames;
    // const winPercent = probability.TotalWins / probabilty.totalGames;
    // console.log('Your Winning % is', probability);
    res.send({
      probability,
      totalWins: response.rows[0].dataValues.TotalWins,
      totalGames: response.rows[0].dataValues.TotalGames,
    });
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

const buildQuery = req => {
  // console.log('original request: ', req);
  const situation = req.situation;
  // console.log('SITUATION: ', situation);
  let query = {};
  query['Outs'] = +situation.outs; // || +situation.Outs;
  query['Bases'] = +situation.runners;
  if (situation.batting == 'homeTeam') {
    query = { ...query, Team: 'H' };
    query.RunDifferential = situation.homeScore - situation.awayScore;
  } else {
    query = { ...query, Team: 'V' };
    query.RunDifferential = situation.awayScore - situation.homeScore;
  }

  query.Inning = +situation.inning;
  return query;
};

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
