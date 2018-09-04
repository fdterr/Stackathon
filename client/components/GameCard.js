import React from 'react';

export default function GameCard(props) {
  const homeTeam = `bbclub-${props.game.homeAbbrev.toLowerCase()}`;
  const awayTeam = `bbclub-${props.game.awayAbbrev.toLowerCase()}`;
  return (
    <div className="cardTable">
      {/* <tr>
        <div className="cardColumn firstCell">
          <br />
        </div>
        <div className="cardColumn teamName">Teams</div>
        <div className="cardColumn">Runs</div>
      </tr> */}
      {/* <tr> */}
      <div className="cardColumn firstCell">
        <br />
        <i className={awayTeam} />
        <i className={homeTeam} />
      </div>

      <div className="cardColumn teamName">
        {/* <div className="title">
          <br />
        </div> */}
        <br />
        <div>{props.game.awayTeam} @</div>
        <div>{props.game.homeTeam}</div>
      </div>
      <div className="cardColumn">
        {/* <div className="title">
          <b>Inn.</b>
        </div> */}
        <br />
        <div>{props.game.batting === 'homeTeam' ? 'Bottom' : 'Top'}</div>
        <div>{props.game.inning}</div>
      </div>

      <div className="cardColumn linescore">
        <div className="title">
          <b>H</b>
        </div>
        <div>{props.game.awayHits}</div>
        <div>{props.game.homeHits}</div>
      </div>

      <div className="cardColumn linescore">
        <div className="title">
          <b>R</b>
        </div>
        <div>{props.game.awayScore}</div>
        <div>{props.game.homeScore}</div>
      </div>

      <div className="cardColumn linescore">
        <div className="title">
          <b>E</b>
        </div>
        <div>{props.game.awayErrors}</div>
        <div>{props.game.homeErrors}</div>
      </div>
    </div>

    // <br />
    // </div>
  );
}

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
