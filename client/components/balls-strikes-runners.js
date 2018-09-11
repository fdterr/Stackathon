import React from 'react';

export default function BallStrikesRunners(props) {
  return (
    <div className="balls-strikes-runners">
      <div className="balls">Balls: {props.balls}</div>
      <div className="strikes">Strikes: {props.strikes}</div>
      <div className="runners">Runners: {props.runners}</div>
    </div>
  );
}
