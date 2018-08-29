import React from 'react';

export default function GameCard(props) {
  console.log('have creaed a game card');
  return (
    <div className="gameCard">
      {props.game.homeTeam}
      <br />
      {props.game.awayTeam}
    </div>
  );
}

// export default GameCard;
