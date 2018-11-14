'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GameCard;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ballsStrikesRunners = require('./balls-strikes-runners');

var _ballsStrikesRunners2 = _interopRequireDefault(_ballsStrikesRunners);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GameCard(props) {
  var homeTeam = 'bbclub-' + props.game.homeAbbrev.toLowerCase();
  var awayTeam = 'bbclub-' + props.game.awayAbbrev.toLowerCase();
  var state = props.game.state;
  return _react2.default.createElement(
    'div',
    { className: 'cardTable' },
    _react2.default.createElement(
      'div',
      { className: 'cardColumns' },
      _react2.default.createElement(
        'div',
        { className: 'cardColumn firstCell' },
        _react2.default.createElement('br', null),
        _react2.default.createElement('i', { className: awayTeam }),
        _react2.default.createElement('i', { className: homeTeam })
      ),
      _react2.default.createElement(
        'div',
        { className: 'cardColumn teamName' },
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          props.game.awayTeam,
          ' @'
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.homeTeam
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cardColumn inning' },
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          state != 'I' ? state == 'P' || state == 'D' ? state == 'P' ? _react2.default.createElement(
            'div',
            null,
            'Pre-Game'
          ) : _react2.default.createElement(
            'div',
            null,
            'Postponed'
          ) : state == 'F' || state == 'O' ? _react2.default.createElement(
            'div',
            null,
            'Final'
          ) : state == 'S' ? _react2.default.createElement(
            'div',
            null,
            'Schld'
          ) : null : props.game.batting === 'homeTeam' ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              null,
              'Bottom'
            ),
            _react2.default.createElement(
              'div',
              null,
              props.game.inning
            )
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'div',
              null,
              'Top'
            ),
            _react2.default.createElement(
              'div',
              null,
              props.game.inning
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cardColumn linescore' },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'b',
            null,
            'R'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.awayScore
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.homeScore
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cardColumn linescore' },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'b',
            null,
            'H'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.awayHits
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.homeHits
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'cardColumn linescore' },
        _react2.default.createElement(
          'div',
          { className: 'title' },
          _react2.default.createElement(
            'b',
            null,
            'E'
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.awayErrors
        ),
        _react2.default.createElement(
          'div',
          null,
          props.game.homeErrors
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'situation' },
      _react2.default.createElement(_ballsStrikesRunners2.default, {
        balls: props.game.balls,
        strikes: props.game.strikes,
        runners: props.runners,
        outs: props.game.outs,
        pitcher: props.game.pitcher,
        batter: props.game.batter
      })
    )
  );
}

var timeConvert = function timeConvert(time) {
  var timeArr = time.split(':');
  var hours = +timeArr[0];
  var minutes = timeArr[1];
  if (+timeArr[0] === 0) {
    hours = +timeArr[0] + 12;
  } else if (+timeArr[0] > 12) {
    hours = +timeArr[0] - 12;
  }

  var newTime = hours + ':' + minutes;
  return newTime;
};

// export default GameCard;

/**
 * Example game:
  outs: '1',
  batting: 'homeTeam',
  homeTeam: 'New York Yankees',
  awayTeam: 'Chicago White Sox',
  inning: '9',
  startTime: '7:05',
  awayScore: '4',
  homeScore: '5',
  runners: [0],
 */

//# sourceMappingURL=GameCard.js.map