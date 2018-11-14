'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Runners = function (_Component) {
  _inherits(Runners, _Component);

  function Runners() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Runners);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Runners.__proto__ || Object.getPrototypeOf(Runners)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      _this.props.setRunnerss(event.target.value);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Runners, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Runners on Base:'
        ),
        _react2.default.createElement(
          'div',
          { className: 'runners' },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'a',
              null,
              'Please select the current baserunner scenario'
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'form',
              { name: 'runners' },
              _react2.default.createElement(
                'div',
                { className: 'runnersOptions' },
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'No One On Base'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 1
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Runner on First Base Only'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 2
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Runner on Second Base Only'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 3
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Runners on First Base and Second Base'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 4
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Runner on Third Base Only'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 5
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Runners on First Base and Third Base'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 6
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Runners on Second Base and Third Base'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 7
                  })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                  'div',
                  { className: 'runnersOption' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'runners' },
                    'Bases Loaded (Runners on All Bases)'
                  ),
                  _react2.default.createElement('input', {
                    className: 'inputRadio',
                    type: 'radio',
                    onChange: this.handleChange,
                    name: 'runners',
                    value: 8
                  })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Runners;
}(_react.Component);

var mapDispatch = function mapDispatch(dispatch) {
  return {
    setRunnerss: function setRunnerss(runners) {
      dispatch((0, _store.setRunners)(runners));
    }
  };
};

exports.default = (0, _reactRedux.connect)(null, mapDispatch)(Runners);

//# sourceMappingURL=Runners.js.map