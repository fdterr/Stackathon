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

var Innings = function (_Component) {
  _inherits(Innings, _Component);

  function Innings() {
    _classCallCheck(this, Innings);

    var _this = _possibleConstructorReturn(this, (Innings.__proto__ || Object.getPrototypeOf(Innings)).call(this));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Innings, [{
    key: 'handleChange',
    value: function handleChange(event) {
      console.log(event.target.name);
      if (event.target.name == 'batting') {
        // console.log('batting');
        this.props.setBattings(event.target.value);
      } else if (event.target.name == 'inning') {
        // console.log('inning');
        this.props.setInnings(event.target.value);
      } else if (event.target.name == 'outs') {
        // console.log('outs');
        this.props.setOutss(event.target.value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Batter Inning, and Outs Input'
        ),
        _react2.default.createElement(
          'form',
          { name: 'batting' },
          _react2.default.createElement(
            'div',
            { className: 'battingOptions' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'b',
                null,
                'Which Team is Batting?'
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'select',
                { name: 'batting', onChange: this.handleChange },
                _react2.default.createElement(
                  'option',
                  { value: 'homeTeam' },
                  'Home Team'
                ),
                _react2.default.createElement(
                  'option',
                  { value: 'awayTeam' },
                  'Away Team'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'form',
          { name: 'outs' },
          _react2.default.createElement(
            'div',
            { className: 'outs' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'b',
                null,
                'How Many Outs Are There?'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'outsOptions' },
              _react2.default.createElement(
                'label',
                { htmlFor: '0' },
                '0 Outs'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                name: 'outs',
                onChange: this.handleChange,
                id: '10',
                value: '0'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'outsOptions' },
              _react2.default.createElement(
                'label',
                { htmlFor: '1' },
                '1 Out'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                name: 'outs',
                onChange: this.handleChange,
                id: '11',
                value: '1'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'outsOptions' },
              _react2.default.createElement(
                'label',
                { htmlFor: '2' },
                '2 Outs'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                name: 'outs',
                onChange: this.handleChange,
                id: '12',
                value: '2'
              })
            )
          )
        ),
        _react2.default.createElement(
          'form',
          { name: 'inning', onSubmit: this.handleSubmit },
          _react2.default.createElement(
            'div',
            { className: 'inningOptions' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'b',
                null,
                'What Inning is It?'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '1' },
                '1st'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '1',
                value: '1'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '2' },
                '2nd'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '2',
                value: '2'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '3' },
                '3rd'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '3',
                value: '3'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '4' },
                '4th'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '4',
                value: '4'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '5' },
                '5th'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '5',
                value: '5'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '6' },
                '6th'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '6',
                value: '6'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '7' },
                '7th'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '7',
                value: '7'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '8' },
                '8th'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '8',
                value: '8'
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'inningOption' },
              _react2.default.createElement(
                'label',
                { htmlFor: '9' },
                '9th'
              ),
              _react2.default.createElement('input', {
                type: 'radio',
                onChange: this.handleChange,
                name: 'inning',
                id: '9',
                value: '9'
              })
            )
          )
        )
      );
    }
  }]);

  return Innings;
}(_react.Component);

var mapState = function mapState(state) {
  return {
    inning: state.baseball.inning
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    setInnings: function setInnings(inning) {
      dispatch((0, _store.setInning)(inning));
    },
    setBattings: function setBattings(batting) {
      dispatch((0, _store.setBatting)(batting));
    },
    setOutss: function setOutss(outs) {
      dispatch((0, _store.setOuts)(outs));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatch)(Innings);

//# sourceMappingURL=Innings.js.map