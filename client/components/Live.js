import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInitial, winExpectancy } from '../store';

import axios from 'axios';

class Live extends Component {
  componentDidMount() {
    this.props.fetchInitials();

    // console.log('QUERY', query);
    // const { data } = await axios.put('/api/calculate', query);
    // console.log('RESPONSE DATA', data);
  }

  componentDidUpdate() {
    if (
      this.props.inning != undefined &&
      this.props.homeScore != undefined &&
      this.props.awayScore != undefined &&
      this.props.runners != undefined &&
      this.props.batting != undefined &&
      this.props.outs != undefined
    ) {
      const situation = {
        outs: this.props.outs,
        inning: this.props.inning,
        batting: this.props.batting,
        homeScore: this.props.homeScore,
        awayScore: this.props.awayScore,
        runners: this.props.runners,
      };
      this.props.winExpectancys(situation);
    }
  }
  render() {
    return (
      <div className="live">
        <div className="game">
          <div className="title">
            <div className="teamName">
              <b>{this.props.awayTeam}</b>
            </div>{' '}
            @{' '}
            <div className="teamName">
              <b>{this.props.homeTeam}</b>
            </div>
            - {this.props.startTime} PM, ET
          </div>

          <br />
          <div className="score">
            <b>Current Score: </b>
            <div>
              {this.props.homeTeam}: {this.props.homeScore}
            </div>
            <div>
              {this.props.awayTeam}: {this.props.awayScore}
            </div>
          </div>
          {this.props.probability != 0 ? (
            <div className="probabilities">
              <div>
                Probability of winning for the{' '}
                {this.props.batting === 'homeTeam'
                  ? this.props.homeTeam
                  : this.props.awayTeam}:{' '}
                <b>
                  {parseFloat(this.props.probability * 100).toFixed(2) + '%'}
                </b>
              </div>
              <div>
                Total scenarios analyzed:{' '}
                <b> {numberWithCommas(this.props.totalGames)}</b>
              </div>
              <div>
                Total wins for the{' '}
                {this.props.batting === 'homeTeam'
                  ? this.props.homeTeam
                  : this.props.awayTeam}:{' '}
                <b>{numberWithCommas(this.props.totalWins)}</b>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const mapState = state => {
  return {
    homeTeam: state.live.homeTeam,
    awayTeam: state.live.awayTeam,
    startTime: state.live.startTime,
    homeScore: state.live.homeScore,
    awayScore: state.live.awayScore,
    runners: state.live.runners,
    inning: state.live.inning,
    batting: state.live.batting,
    outs: state.live.outs,
    probability: state.baseball.probability,
    totalWins: state.baseball.totalWins,
    totalGames: state.baseball.totalGames,
  };
};

const mapDispatch = dispatch => {
  return {
    fetchInitials: () => {
      dispatch(fetchInitial());
    },
    winExpectancys: async situation => {
      dispatch(winExpectancy(situation));
    },
  };
};

export default connect(mapState, mapDispatch)(Live);
