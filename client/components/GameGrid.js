import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import GameCard from './GameCard';

export default function GameGrid(props) {
  return (
    <div className="cardGrid">
      <ReactGridLayout>
        {props.games.map(game => (
          <GameCard game={game} live={game.statusCode} />
        ))}
      </ReactGridLayout>
    </div>
  );
}
