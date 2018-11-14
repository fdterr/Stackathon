'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_Component) {
  _inherits(Score, _Component);

  function Score() {
    _classCallCheck(this, Score);

    var _this = _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this));

    _this.handleChange = function (event) {
      if (event.target.name === 'homeTeamScore') {
        _this.props.setHomeScores(event.target.value);
      } else if (event.target.name === 'awayTeamScore') {
        _this.props.setAwayScores(event.target.value);
      }
    };

    _this.state = {
      homeTeamScore: -1,
      awayTeamScore: -1,
      scoreDifference: -1
    };
    return _this;
  }

  _createClass(Score, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Score Settings'
        ),
        _react2.default.createElement(
          'form',
          { name: 'score' },
          _react2.default.createElement(
            'div',
            { className: 'scoreContainer' },
            _react2.default.createElement(
              'div',
              { className: 'scoreOptions' },
              _react2.default.createElement(
                'div',
                { className: 'scoreOption' },
                _react2.default.createElement(
                  'b',
                  null,
                  'Home Team Score: '
                ),
                _react2.default.createElement('input', {
                  type: 'text',
                  onChange: this.handleChange,
                  name: 'homeTeamScore'
                })
              ),
              _react2.default.createElement(
                'div',
                { className: 'scoreOption' },
                _react2.default.createElement(
                  'b',
                  null,
                  'Away Team Score: '
                ),
                _react2.default.createElement('input', {
                  type: 'text',
                  onChange: this.handleChange,
                  name: 'awayTeamScore'
                })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'label',
                  null,
                  'Score Difference:',
                  ' ',
                  this.props.homeScore !== -1 && this.props.awayScore !== -1 ? _react2.default.createElement(
                    'b',
                    null,
                    this.props.homeScore - this.props.awayScore,
                    ' '
                  ) : _react2.default.createElement(
                    'a',
                    null,
                    'Please input a score value for both the home and away teams'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Score;
}(_react.Component);

var mapState = function mapState(state) {
  return {
    homeScore: state.baseball.homeScore,
    awayScore: state.baseball.awayScore
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    setHomeScores: function setHomeScores(score) {
      dispatch((0, _store.setHomeScore)(score));
    },
    setAwayScores: function setAwayScores(score) {
      dispatch((0, _store.setAwayScore)(score));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Score);

//# sourceMappingURL=Score.js.map