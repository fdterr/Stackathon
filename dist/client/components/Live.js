'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../store');

var _GameCard = require('./GameCard');

var _GameCard2 = _interopRequireDefault(_GameCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Live = function (_Component) {
  _inherits(Live, _Component);

  function Live() {
    _classCallCheck(this, Live);

    return _possibleConstructorReturn(this, (Live.__proto__ || Object.getPrototypeOf(Live)).apply(this, arguments));
  }

  _createClass(Live, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchInitials();
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('props are ', this.props);
      return _react2.default.createElement(
        'div',
        { className: 'cardGrid' },
        this.props.games.length > 0 ? this.props.games.map(function (game) {
          return _react2.default.createElement(_GameCard2.default, { game: game, live: game.statusCode });
        }) : _react2.default.createElement('div', { className: 'loader' })
      );
    }
  }]);

  return Live;
}(_react.Component);

var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var mapState = function mapState(state) {
  return {
    games: state.live
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    fetchInitials: function fetchInitials() {
      dispatch((0, _store.fetchInitial)());
    },
    winExpectancys: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(situation) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch((0, _store.winExpectancy)(situation));

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function winExpectancys(_x) {
        return _ref.apply(this, arguments);
      };
    }()
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Live);

//# sourceMappingURL=Live.js.map