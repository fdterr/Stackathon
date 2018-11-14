'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseball = require('./baseball');

Object.keys(_baseball).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _baseball[key];
    }
  });
});

var _live = require('./live');

Object.keys(_live).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _live[key];
    }
  });
});

var _redux = require('redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = require('redux-devtools-extension');

var _baseball2 = _interopRequireDefault(_baseball);

var _live2 = _interopRequireDefault(_live);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({ baseball: _baseball2.default, live: _live2.default });
var middleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)({ collapsed: true })));
var store = (0, _redux.createStore)(reducer, middleware);

exports.default = store;

//# sourceMappingURL=index.js.map