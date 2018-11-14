'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Win Expectancy Calculator'
    ),
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/home' },
          'Home'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/calculator' },
          'Calculator'
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/live' },
          'Live Calculations'
        )
      )
    ),
    _react2.default.createElement('hr', null)
  );
};

/**
 * CONTAINER
 */
var mapState = function mapState(state) {
  return {
    // isLoggedIn: !!state.user.id,
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    // handleClick() {
    //   dispatch(logout());
    // },
  };
};

exports.default = (0, _reactRedux.connect)(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 //  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };

//# sourceMappingURL=navbar.js.map