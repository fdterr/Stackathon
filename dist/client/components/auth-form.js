'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Signup = exports.Login = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _store = require('../store');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * COMPONENT
 */
var AuthForm = function AuthForm(props) {
  var name = props.name,
      displayName = props.displayName,
      handleSubmit = props.handleSubmit,
      error = props.error;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: handleSubmit, name: name },
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'email' },
          _react2.default.createElement(
            'small',
            null,
            'Email'
          )
        ),
        _react2.default.createElement('input', { name: 'email', type: 'text' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'password' },
          _react2.default.createElement(
            'small',
            null,
            'Password'
          )
        ),
        _react2.default.createElement('input', { name: 'password', type: 'password' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          displayName
        )
      ),
      error && error.response && _react2.default.createElement(
        'div',
        null,
        ' ',
        error.response.data,
        ' '
      )
    ),
    _react2.default.createElement(
      'a',
      { href: '/auth/google' },
      displayName,
      ' with Google'
    )
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
var mapLogin = function mapLogin(state) {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error
  };
};

var mapSignup = function mapSignup(state) {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error
  };
};

var mapDispatch = function mapDispatch(dispatch) {
  return {
    handleSubmit: function handleSubmit(evt) {
      evt.preventDefault();
      var formName = evt.target.name;
      var email = evt.target.email.value;
      var password = evt.target.password.value;
      dispatch((0, _store.auth)(email, password, formName));
    }
  };
};

var Login = exports.Login = (0, _reactRedux.connect)(mapLogin, mapDispatch)(AuthForm);
var Signup = exports.Signup = (0, _reactRedux.connect)(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: _propTypes2.default.string.isRequired,
  displayName: _propTypes2.default.string.isRequired,
  handleSubmit: _propTypes2.default.func.isRequired,
  error: _propTypes2.default.object
};

//# sourceMappingURL=auth-form.js.map