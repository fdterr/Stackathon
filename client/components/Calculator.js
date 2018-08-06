import React, { Component } from 'react';
import Innings from './Innings';
import Runners from './Runners';
import Score from './Score';
import { winExpectancy } from '../store';

class Calculator extends Component {
  constructor() {
    super();
  }

  onClick = async event => {
    console.log(this.state);
    // this.props.winExpectancy({

    // })
  };

  render() {
    return (
      <div>
        <Innings />
        <br />
        <hr />
        <Score />
        <br />
        <hr />
        <Runners />
        <br />
        <button type="submit">Calculate Win Expectancy</button>
      </div>
    );
  }
}

const mapState = state => {
  return {
    inning: state.baseball.inning,
    batting: state.baseball.batting,
    scoreDifference: state.baseball.homeScore - state.baseball.awayScore,
    runners: state.baseball.runners,
  };
};

const mapDispatch = dispatch => {
  return {
    winExpectancys: async situation => {
      dispatch(winExpectancy(situation));
    },
  };
};

export default connect(mapState, mapDispatch)(Calculator);
