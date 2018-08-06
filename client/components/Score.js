import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setHomeScore, setAwayScore } from '../store';

class Score extends Component {
  constructor() {
    super();
    this.state = {
      homeTeamScore: -1,
      awayTeamScore: -1,
      scoreDifference: -1,
    };
  }
  handleChange = event => {
    console.log(event.target.name, event.target.value);
    if (event.target.name === 'homeTeamScore') {
      this.props.setHomeScores(event.target.value);
    } else if (event.target.name === 'awayTeamScore') {
      this.props.setAwayScores(event.target.value);
    }
  };

  render() {
    return (
      <div>
        <form name="score">
          <label>Home Team Score: </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="homeTeamScore"
          />
          <label>Away Team Score: </label>
          <input
            type="text"
            onChange={this.handleChange}
            name="awayTeamScore"
          />
        </form>
        <label>
          Score Difference:{' '}
          {this.props.homeScore !== -1 && this.props.awayScore !== -1 ? (
            <a>{this.props.homeScore - this.props.awayScore} </a>
          ) : (
            <a>Please input a score value for both the home and away teams</a>
          )}
        </label>
      </div>
    );
  }
}

const mapState = state => {
  return {
    homeScore: state.baseball.homeScore,
    awayScore: state.baseball.awayScore,
  };
};

const mapDispatch = dispatch => {
  return {
    setHomeScores: score => {
      dispatch(setHomeScore(score));
    },
    setAwayScores: score => {
      dispatch(setAwayScore(score));
    },
  };
};

export default connect(mapState, mapDispatch)(Score);
