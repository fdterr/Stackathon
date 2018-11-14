'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserHome = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * COMPONENT
 */
var UserHome = exports.UserHome = function UserHome(props) {
  var email = props.email;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      null,
      'Welcome, ',
      email
    )
  );
};

/**
 * CONTAINER
 */
var mapState = function mapState(state) {
  return {
    email: state.user.email
  };
};

exports.default = (0, _reactRedux.connect)(mapState)(UserHome);

/**
 * PROP TYPES
 */

UserHome.propTypes = {
  email: _propTypes2.default.string
};

//# sourceMappingURL=user-home.js.map