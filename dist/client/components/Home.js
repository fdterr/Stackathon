'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Home;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * COMPONENT
 */
function Home(props) {
  // const { email } = props;

  return _react2.default.createElement(
    'div',
    { className: 'test' },
    _react2.default.createElement(
      'h3',
      null,
      'Welcome Baseball Lovers!'
    )
  );
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     email: state.user.email,
//   };
// };

// export default connect(mapState)(Home);

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string,
// };

//# sourceMappingURL=Home.js.map