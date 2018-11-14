'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.winExpectancy = exports.setOuts = exports.setRunners = exports.setAwayScore = exports.setHomeScore = exports.setBatting = exports.setInning = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case SET_INNING:
      return Object.assign({}, state, { inning: action.inning });
    case SET_BATTING:
      return Object.assign({}, state, { batting: action.batting });
    case SET_HOME_SCORE:
      return Object.assign({}, state, {
        homeScore: action.score
      });
    case SET_AWAY_SCORE:
      return Object.assign({}, state, {
        awayScore: action.score
      });
    case SET_RUNNERS:
      return Object.assign({}, state, {
        runners: action.runners
      });
    case SET_OUTS:
      return Object.assign({}, state, {
        outs: action.outs
      });
    case WIN_EXPECTANCY:
      return Object.assign({}, state, {
        probability: action.data.probability,
        totalGames: action.data.totalGames,
        totalWins: action.data.totalWins
      });
    default:
      return state;
  }
};

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _history = require('../history');

var _history2 = _interopRequireDefault(_history);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * ACTION TYPES
 */
var SET_INNING = 'SET_INNING';
var SET_BATTING = 'SET_BATTING';
var SET_HOME_SCORE = 'SET_HOME_SCORE';
var SET_AWAY_SCORE = 'SET_AWAY_SCORE';
var SET_RUNNERS = 'SET_RUNNERS';
var SET_OUTS = 'SET_OUTS';
var WIN_EXPECTANCY = 'WIN_EXPECTANCY';

/**
 * INITIAL STATE
 */
var defaultState = {
  inning: 1,
  batting: 'homeTeam',
  homeScore: -1,
  awayScore: -1,
  runners: 1,
  outs: 0,
  probability: 0,
  totalWins: 0,
  totalGames: 0
};

/**
 * ACTION CREATORS
 */

var setInning = exports.setInning = function setInning(inning) {
  return {
    type: SET_INNING,
    inning: inning
  };
};

var setBatting = exports.setBatting = function setBatting(batting) {
  return {
    type: SET_BATTING,
    batting: batting
  };
};

var setHomeScore = exports.setHomeScore = function setHomeScore(score) {
  return {
    type: SET_HOME_SCORE,
    score: score
  };
};

var setAwayScore = exports.setAwayScore = function setAwayScore(score) {
  return {
    type: SET_AWAY_SCORE,
    score: score
  };
};

var setRunners = exports.setRunners = function setRunners(runners) {
  return {
    type: SET_RUNNERS,
    runners: runners
  };
};

var setOuts = exports.setOuts = function setOuts(outs) {
  return {
    type: SET_OUTS,
    outs: outs
  };
};

var calculateProbabilty = function calculateProbabilty(data) {
  return {
    type: WIN_EXPECTANCY,
    data: data
  };
};

/**
 * Thunky stuff
 */

var winExpectancy = exports.winExpectancy = function winExpectancy(situation) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.put('/api/calculate', { situation: situation });

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;

              console.log('axios resopnse', data);
              dispatch(calculateProbabilty(data));
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](0);

              console.log(_context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 9]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

/**
 * REDUCER
 */

//# sourceMappingURL=baseball.js.map