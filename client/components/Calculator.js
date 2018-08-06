import React, { Component } from 'react';
import Innings from './Innings';
import Runners from './Runners';
import Score from './Score';
import { winExpectancy } from '../store';
import { connect } from 'react-redux';
import store from '../store';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = async event => {
    // console.log(store.getState());
    // const situation = store.getState().baseball;
    this.props.winExpectancys(store.getState().baseball);
  };

  render() {
    return (
      <div className="calculator">
        <Innings />
        <br />
        <hr />
        <Score />
        <br />
        <hr />
        <Runners />
        <br />
        {this.props.probability !== 0 ? (
          <div className="results">
            <div>
              Probability of winning for the{' '}
              {this.props.batting === 'homeTeam' ? 'home team' : 'away team'}:{' '}
              <b>{parseFloat(this.props.probability * 100).toFixed(2) + '%'}</b>
            </div>
            <div>
              Total scenarios analyzed:{' '}
              <b> {numberWithCommas(this.props.totalGames)}</b>
            </div>
            <div>
              Total wins for the{' '}
              {this.props.batting === 'homeTeam' ? 'home team' : 'away team'}:{' '}
              <b>{numberWithCommas(this.props.totalWins)}</b>
            </div>
          </div>
        ) : (
          ''
        )}
        <button type="submit" onClick={this.handleClick}>
          Calculate Win Expectancy
        </button>
      </div>
    );
  }
}

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const mapState = state => {
  return {
    inning: state.baseball.inning,
    batting: state.baseball.batting,
    scoreDifference: state.baseball.homeScore - state.baseball.awayScore,
    runners: state.baseball.runners,
    probability: state.baseball.probability,
    totalWins: state.baseball.totalWins,
    totalGames: state.baseball.totalGames,
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
