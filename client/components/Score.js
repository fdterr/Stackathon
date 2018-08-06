import React from 'react';
import { connect } from 'react-redux';
import { setScore } from '../store';

const Score = props => {
  return (
    <div>
      <form name="score">
        <label>Home Team Score: </label>
        <input type="text" name="homeTeamScore" />
        <label>Away Team Score: </label>
        <input type="text" name="awayTeamScore" />
      </form>
    </div>
  );
};

const mapState = state => {
  return {};
};

const mapDispatch = dispatch => {
  return {
    setScores: score => {
      dispatch(setScore(score));
    },
  };
};

export default connect(mapState, mapDispatch)(Score);
