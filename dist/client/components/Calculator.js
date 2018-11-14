'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Innings = require('./Innings');

var _Innings2 = _interopRequireDefault(_Innings);

var _Runners = require('./Runners');

var _Runners2 = _interopRequireDefault(_Runners);

var _Score = require('./Score');

var _Score2 = _interopRequireDefault(_Score);

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_Component) {
  _inherits(Calculator, _Component);

  function Calculator() {
    var _this2 = this;

    _classCallCheck(this, Calculator);

    var _this = _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).call(this));

    _this.handleClick = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // console.log(store.getState());
                // const situation = store.getState().baseball;
                _this.props.winExpectancys(_store2.default.getState().baseball);

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    _this.state = {};
    return _this;
  }

  _createClass(Calculator, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'calculator' },
        _react2.default.createElement(_Innings2.default, null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_Score2.default, null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_Runners2.default, null),
        _react2.default.createElement('br', null),
        this.props.probability !== 0 ? _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'div',
            null,
            'Probability of winning for the',
            ' ',
            this.props.batting === 'homeTeam' ? 'home team' : 'away team',
            ':',
            ' ',
            _react2.default.createElement(
              'b',
              null,
              parseFloat(this.props.probability * 100).toFixed(2) + '%'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            'Total scenarios analyzed:',
            ' ',
            _react2.default.createElement(
              'b',
              null,
              ' ',
              numberWithCommas(this.props.totalGames)
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            'Total wins for the',
            ' ',
            this.props.batting === 'homeTeam' ? 'home team' : 'away team',
            ':',
            ' ',
            _react2.default.createElement(
              'b',
              null,
              numberWithCommas(this.props.totalWins)
            )
          )
        ) : '',
        _react2.default.createElement(
          'button',
          { type: 'submit', onClick: this.handleClick },
          'Calculate Win Expectancy'
        )
      );
    }
  }]);

  return Calculator;
}(_react.Component);

var numberWithCommas = function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

var mapState = function mapState(state) {
  return {
    inning: state.baseball.inning,
    batting: state.baseball.batting,
    scoreDifference: state.baseball.homeScore - state.baseball.awayScore,
    runners: state.baseball.runners,
    probability: state.baseball.probability,
    totalWins: state.baseball.totalWins,
    totalGames: state.baseball.totalGames
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    winExpectancys: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(situation) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch((0, _store.winExpectancy)(situation));

              case 1:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function winExpectancys(_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Calculator);

//# sourceMappingURL=Calculator.js.map