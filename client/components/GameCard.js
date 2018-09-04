import React from 'react';

export default function GameCard(props) {
  return (
    <table className="gameCard cardTable">
      <div className="cardColumn firstCell">
        <td>
          <i class="bbclub-bos" />
        </td>
        <td>
          <i class="bbclub-bos" />
        </td>
      </div>

      <div className="cardColumn teamName">
        <td>{props.game.homeTeam}</td>
        <td>{props.game.awayTeam}</td>
      </div>

      <div className="cardColumn">
        <td>{props.game.homeScore}</td>
        <td>{props.game.awayScore}</td>
      </div>

      {/* <div className="cardColumn">
        <td>Outs:</td>
        <td>{props.game.outs}</td>
      </div> */}
    </table>
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
