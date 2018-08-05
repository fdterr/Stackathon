const router = require('express').Router();
const db = require('../db/db');
const DataTypes = require('sequelize/lib/data-types');
const Events = require('../db/models/events')(db, DataTypes);
// const Sequelize = require('sequelize');
// const Models = require('../db/models');
// const Events = Models.Events;
// const User = require('../db/models/user');
// const Events = require('../db/models/events')(Sequelize, DataTypes);

module.exports = router;

router.use('/', async (req, res, next) => {
  console.log('hit this route!', Events);
  try {
    // const result1 = await User.findOne({
    //   where: {
    //     YEAR_ID: '1952',
    //   },
    // });
    // console.log('RESULT1: ', result1);
    const result = await Events.findOne({
      where: {
        YEAR_ID: '1952',
      },
    });
    console.log('RESULT: ', result);
    res.status(201).end;
  } catch (err) {
    console.log('caught error!');
    next(err);
  }
});

router.use('/users', require('./users'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
