import React from 'react';

export default function GameCard(props) {
  console.log('have creaed a game card');
  return (
    <div key={props.game.homeTeam} className="gameCard">
      <table>
        <tr>
          <td>{props.game.homeTeam}</td>
          <td>Outs:</td>
        </tr>
        <br />
        <tr>
          <td>{props.game.awayTeam}</td>
          <td>{props.game.outs}</td>
        </tr>
      </table>
      <br />
    </div>
  );
}

// export default GameCard;
