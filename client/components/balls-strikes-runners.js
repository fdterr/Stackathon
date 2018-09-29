import React from 'react';

export default function BallStrikesRunners(props) {
  return (
    <div className="balls-strikes-runners">
      <div className="balls-strikes-outs">
        <div className="count">
          {props.balls}
          {' \u2014 '}
          {props.strikes}
        </div>

        <div className="outs">Outs: {props.outs}</div>
      </div>

      <div className="runners">
        <div className="base" />
        <div className="base" />
        <div className="base" />
        <div className="base home" />
      </div>

      <div className="pitcher-hitter">
        P: {props.pitcher} <br /> B: {props.batter}
      </div>
    </div>
  );
}
