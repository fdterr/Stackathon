'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.auth = exports.me = undefined;

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultUser;
  var action = arguments[1];

  switch (action.type) {
    case GET_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
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
var GET_USER = 'GET_USER';
var REMOVE_USER = 'REMOVE_USER';

/**
 * INITIAL STATE
 */
var defaultUser = {};

/**
 * ACTION CREATORS
 */
var getUser = function getUser(user) {
  return { type: GET_USER, user: user };
};
var removeUser = function removeUser() {
  return { type: REMOVE_USER };
};

/**
 * THUNK CREATORS
 */
var me = exports.me = function me() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _axios2.default.get('/auth/me');

            case 3:
              res = _context.sent;

              dispatch(getUser(res.data || defaultUser));
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](0);

              console.error(_context.t0);

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 7]]);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var auth = exports.auth = function auth(email, password, method) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              res = void 0;
              _context2.prev = 1;
              _context2.next = 4;
              return _axios2.default.post('/auth/' + method, { email: email, password: password });

            case 4:
              res = _context2.sent;
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2['catch'](1);
              return _context2.abrupt('return', dispatch(getUser({ error: _context2.t0 })));

            case 10:

              try {
                dispatch(getUser(res.data));
                _history2.default.push('/home');
              } catch (dispatchOrHistoryErr) {
                console.error(dispatchOrHistoryErr);
              }

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[1, 7]]);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

var logout = exports.logout = function logout() {
  return function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return _axios2.default.post('/auth/logout');

            case 3:
              dispatch(removeUser());
              _history2.default.push('/login');
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3['catch'](0);

              console.error(_context3.t0);

            case 10:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[0, 7]]);
    }));

    return function (_x3) {
      return _ref3.apply(this, arguments);
    };
  }();
};

/**
 * REDUCER
 */

//# sourceMappingURL=user.js.map