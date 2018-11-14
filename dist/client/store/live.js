'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchInitial = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case LOADING:
      return action.data;
    case LOAD_DATA:
      return action.data;
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

// /**
//  * ACTION TYPES
//  */
var FETCH_INITIAL = 'FETCH_INITIAL';
var LOAD_DATA = 'LOAD_DATA';
var LOADING = 'LOADING';
// const SET_HOME_SCORE = 'SET_HOME_SCORE';
// const SET_AWAY_SCORE = 'SET_AWAY_SCORE';
// const SET_RUNNERS = 'SET_RUNNERS';
// const SET_OUTS = 'SET_OUTS';
// const WIN_EXPECTANCY = 'WIN_EXPECTANCY';

/**
 * INITIAL STATE
 */
var defaultState = {
  games: []
};

/**
 * ACTION CREATORS
 */

var loadData = function loadData(data) {
  return {
    type: LOAD_DATA,
    data: data
  };
};

var loading = function loading() {
  return {
    type: LOADING,
    loading: true
  };
};

var fetchInitial = exports.fetchInitial = function fetchInitial() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var _ref2, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get('/api/games/allgames');

            case 3:
              _ref2 = _context.sent;
              data = _ref2.data;

              console.log('data is', data);
              console.table(data);
              dispatch(loadData(data));
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 10]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

// export const setInning = inning => {
//   return {
//     type: SET_INNING,
//     inning,
//   };
// };

// export const setBatting = batting => {
//   return {
//     type: SET_BATTING,
//     batting,
//   };
// };

// export const setHomeScore = score => {
//   return {
//     type: SET_HOME_SCORE,
//     score,
//   };
// };

// export const setAwayScore = score => {
//   return {
//     type: SET_AWAY_SCORE,
//     score,
//   };
// };

// export const setRunners = runners => {
//   return {
//     type: SET_RUNNERS,
//     runners,
//   };
// };

// export const setOuts = outs => {
//   return {
//     type: SET_OUTS,
//     outs,
//   };
// };

// const calculateProbabilty = data => {
//   return {
//     type: WIN_EXPECTANCY,
//     data,
//   };
// };

// /**
//  * Thunky stuff
//  */
var baseMatch = {
  '0': 1,
  '0,1': 2,
  '0,2': 3,
  '0,1,2': 4,
  '0,3': 5,
  '0,1,3': 6,
  '0,2,3': 7,
  '0,1,2,3': 8
};

// export const winExpectancy = situation => {
//   return async dispatch => {
//     try {
//       const { data } = await axios.put('/api/calculate', { situation });
//       console.log('axios resopnse', data);
//       dispatch(calculateProbabilty(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

/**
 * REDUCER
 */

//# sourceMappingURL=live.js.map