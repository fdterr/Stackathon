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
        <div
          className={
            props.runners === 1
              ? 'base empty'
              : props.runners === 2
                ? 'base empty'
                : props.runners === 3
                  ? 'base occupied'
                  : props.runners === 4
                    ? 'base occupied'
                    : props.runners === 5
                      ? 'base empty'
                      : props.runners === 6
                        ? 'base empty'
                        : props.runners === 7
                          ? 'base occupied'
                          : 'base occupied'
          }
        />
        <div className="base" />
        <div className="base" />
        <div className="base home" />
      </div>

      <div className="pitcher-hitter">
        <b>P: </b>
        {props.pitcher} <br /> <b>B: </b>
        {props.batter}
      </div>
    </div>
  );
}
