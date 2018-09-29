import React from 'react';
import BallsStrikesRunners from './balls-strikes-runners';

export default function GameCard(props) {
  const homeTeam = `bbclub-${props.game.homeAbbrev.toLowerCase()}`;
  const awayTeam = `bbclub-${props.game.awayAbbrev.toLowerCase()}`;
  const state = props.game.state;
  return (
    <div className="cardTable">
      <div className="cardColumns">
        <div className="cardColumn firstCell">
          <br />
          <i className={awayTeam} />
          <i className={homeTeam} />
        </div>

        {/* team icons */}
        <div className="cardColumn teamName">
          <br />
          <div>{props.game.awayTeam} @</div>
          <div>{props.game.homeTeam}</div>
        </div>

        {/* innings */}
        <div className="cardColumn inning">
          <br />
          <div>
            {/* Calculating what to display for innings */}
            {state != 'I' ? (
              state == 'P' || state == 'D' ? (
                state == 'P' ? (
                  <div>Pre-Game</div>
                ) : (
                  <div>Postponed</div>
                )
              ) : state == 'F' || state == 'O' ? (
                <div>Final</div>
              ) : state == 'S' ? (
                <div>Schld</div>
              ) : null
            ) : props.game.batting === 'homeTeam' ? (
              <div>
                <div>Bottom</div>
                <div>{props.game.inning}</div>
              </div>
            ) : (
              <div>
                <div>Top</div>
                <div>{props.game.inning}</div>
              </div>
            )}
          </div>
        </div>

        {/* Runs */}
        <div className="cardColumn linescore">
          <div className="title">
            <b>R</b>
          </div>
          <div>{props.game.awayScore}</div>
          <div>{props.game.homeScore}</div>
        </div>

        {/* Hits */}
        <div className="cardColumn linescore">
          <div className="title">
            <b>H</b>
          </div>
          <div>{props.game.awayHits}</div>
          <div>{props.game.homeHits}</div>
        </div>

        {/* Errors */}
        <div className="cardColumn linescore">
          <div className="title">
            <b>E</b>
          </div>
          <div>{props.game.awayErrors}</div>
          <div>{props.game.homeErrors}</div>
        </div>
      </div>
      {/* End of Card Columns */}
      <div className="situation">
        <BallsStrikesRunners
          balls={props.game.balls}
          strikes={props.game.strikes}
          runners={props.runners}
          outs={props.game.outs}
          pitcher={props.game.pitcher}
          batter={props.game.batter}
        />
      </div>
    </div>
  );
}

const timeConvert = time => {
  let timeArr = time.split(':');
  let hours = +timeArr[0];
  let minutes = timeArr[1];
  if (+timeArr[0] === 0) {
    hours = +timeArr[0] + 12;
  } else if (+timeArr[0] > 12) {
    hours = +timeArr[0] - 12;
  }

  let newTime = hours + ':' + minutes;
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
