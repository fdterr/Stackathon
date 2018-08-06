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
        <h3>Score Settings</h3>
        <form name="score">
          <div className="scoreContainer">
            <div className="scoreOptions">
              <div className="scoreOption">
                <b>Home Team Score: </b>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="homeTeamScore"
                />
              </div>
              <div className="scoreOption">
                <b>Away Team Score: </b>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="awayTeamScore"
                />
              </div>
            </div>
            <div>
              <div>
                <label>
                  Score Difference:{' '}
                  {this.props.homeScore !== -1 &&
                  this.props.awayScore !== -1 ? (
                    <b>{this.props.homeScore - this.props.awayScore} </b>
                  ) : (
                    <a>
                      Please input a score value for both the home and away
                      teams
                    </a>
                  )}
                </label>
              </div>
            </div>
          </div>
        </form>
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
