import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInitial, winExpectancy } from '../store';
import GameCard from './GameCard';

class Live extends Component {
  componentDidMount() {
    this.props.fetchInitials();
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
    games: state.live,
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
