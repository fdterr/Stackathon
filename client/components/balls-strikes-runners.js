import React from 'react';

export default function BallStrikesRunners(props) {
  return (
    <div className="balls-strikes-runners">
      <div className="balls-strikes">
        {props.balls}
        {'\u2014'}
        {props.strikes} {/** '\u2014' is an mdash (&mdash) */}
      </div>
      <div className="outs">Outs: {props.outs || '\u2014'}</div>
      <div className="runners">
        <div className="base" />
        <div className="base" />
        <div className="base" />
        <div className="base home" />
      </div>
    </div>
  );
}
