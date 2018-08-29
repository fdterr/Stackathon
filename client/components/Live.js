import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInitial, winExpectancy } from '../store';
import GameCard from './GameCard';

class Live extends Component {
  componentDidMount() {
    // this.props.fetchInitials();
  }

  render() {
    console.log('props are ', this.props);
    return (
      <div>
        {this.props.games.length > 0 ? (
          this.props.games.map(game => <GameCard game={game} />)
        ) : (
          // this.props.games.forEach(game => {
          //   <GameCard game={game} />;
          // })
          <div className="loader" />
        )}
      </div>
    );
  }
}

const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const mapState = state => {
  return {
    // games: state.live,
    games: [
      {
        outs: '1',
        batting: 'homeTeam',
        homeTeam: 'New York Yankees',
        awayTeam: 'Chicago White Sox',
        inning: '9',
        startTime: '7:05',
        awayScore: '4',
        homeScore: '5',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'Baltimore Orioles',
        awayTeam: 'Toronto Blue Jays',
        inning: '9',
        startTime: '7:05',
        awayScore: '5',
        homeScore: '12',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'homeTeam',
        homeTeam: 'Philadelphia Phillies',
        awayTeam: 'Washington Nationals',
        inning: '9',
        startTime: '7:05',
        awayScore: '5',
        homeScore: '4',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '2',
        batting: 'homeTeam',
        homeTeam: 'Boston Red Sox',
        awayTeam: 'Miami Marlins',
        inning: '9',
        startTime: '7:10',
        awayScore: '7',
        homeScore: '8',
        runners: [0, 1],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'Cincinnati Reds',
        awayTeam: 'Milwaukee Brewers',
        inning: '9',
        startTime: '7:10',
        awayScore: '7',
        homeScore: '9',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'Cleveland Indians',
        awayTeam: 'Minnesota Twins',
        inning: '9',
        startTime: '7:10',
        awayScore: '1',
        homeScore: '8',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'Atlanta Braves',
        awayTeam: 'Tampa Bay Rays',
        inning: '9',
        startTime: '7:35',
        awayScore: '5',
        homeScore: '9',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '0',
        batting: 'homeTeam',
        homeTeam: 'Texas Rangers',
        awayTeam: 'Los Angeles Dodgers',
        inning: '9',
        startTime: '8:05',
        awayScore: '8',
        homeScore: '2',
        runners: [0, 1, 2],
        startDate: '2018/08/28',
      },
      {
        outs: '0',
        batting: 'awayTeam',
        homeTeam: 'Chicago Cubs',
        awayTeam: 'New York Mets',
        inning: '10',
        startTime: '8:05',
        awayScore: '1',
        homeScore: '1',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '2',
        batting: 'awayTeam',
        homeTeam: 'Houston Astros',
        awayTeam: 'Oakland Athletics',
        inning: '9',
        startTime: '8:10',
        awayScore: '4',
        homeScore: '3',
        runners: [0, 2, 3],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'Kansas City Royals',
        awayTeam: 'Detroit Tigers',
        inning: '9',
        startTime: '8:15',
        awayScore: '2',
        homeScore: '6',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'St. Louis Cardinals',
        awayTeam: 'Pittsburgh Pirates',
        inning: '9',
        startTime: '8:15',
        awayScore: '2',
        homeScore: '5',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '2',
        batting: 'homeTeam',
        homeTeam: 'Los Angeles Angels',
        awayTeam: 'Colorado Rockies',
        inning: '4',
        startTime: '10:07',
        awayScore: '2',
        homeScore: '0',
        runners: [0, 1],
        startDate: '2018/08/28',
      },
      {
        outs: '3',
        batting: 'awayTeam',
        homeTeam: 'San Diego Padres',
        awayTeam: 'Seattle Mariners',
        inning: '6',
        startTime: '10:10',
        awayScore: '0',
        homeScore: '2',
        runners: [0],
        startDate: '2018/08/28',
      },
      {
        outs: '0',
        batting: 'awayTeam',
        homeTeam: 'San Francisco Giants',
        awayTeam: 'Arizona Diamondbacks',
        inning: '5',
        startTime: '10:15',
        awayScore: '0',
        homeScore: '0',
        runners: [0],
        startDate: '2018/08/28',
      },
    ],
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
