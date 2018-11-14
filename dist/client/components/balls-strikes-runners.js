"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BallStrikesRunners;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BallStrikesRunners(props) {
  return _react2.default.createElement(
    "div",
    { className: "balls-strikes-runners" },
    _react2.default.createElement(
      "div",
      { className: "balls-strikes-outs" },
      _react2.default.createElement(
        "div",
        { className: "count" },
        props.balls,
        " \u2014 ",
        props.strikes
      ),
      _react2.default.createElement(
        "div",
        { className: "outs" },
        "Outs: ",
        props.outs
      )
    ),
    _react2.default.createElement(
      "div",
      { className: "runners" },
      _react2.default.createElement("div", {
        className: props.runners === 1 ? 'base empty' : props.runners === 2 ? 'base empty' : props.runners === 3 ? 'base occupied' : props.runners === 4 ? 'base occupied' : props.runners === 5 ? 'base empty' : props.runners === 6 ? 'base empty' : props.runners === 7 ? 'base occupied' : 'base occupied'
      }),
      _react2.default.createElement("div", { className: "base" }),
      _react2.default.createElement("div", { className: "base" }),
      _react2.default.createElement("div", { className: "base home" })
    ),
    _react2.default.createElement(
      "div",
      { className: "pitcher-hitter" },
      _react2.default.createElement(
        "b",
        null,
        "P: "
      ),
      props.pitcher,
      " ",
      _react2.default.createElement("br", null),
      " ",
      _react2.default.createElement(
        "b",
        null,
        "B: "
      ),
      props.batter
    )
  );
}

//# sourceMappingURL=balls-strikes-runners.js.map