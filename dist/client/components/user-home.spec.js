'use strict';

var _chai = require('chai');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzyme2 = _interopRequireDefault(_enzyme);

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _userHome = require('./user-home');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var adapter = new _enzymeAdapterReact2.default(); /* global describe beforeEach it */

_enzyme2.default.configure({ adapter: adapter });

describe('UserHome', function () {
  var userHome = void 0;

  beforeEach(function () {
    userHome = (0, _enzyme.shallow)(_react2.default.createElement(_userHome.UserHome, { email: 'cody@email.com' }));
  });

  it('renders the email in an h3', function () {
    (0, _chai.expect)(userHome.find('h3').text()).to.be.equal('Welcome, cody@email.com');
  });
});

//# sourceMappingURL=user-home.spec.js.map