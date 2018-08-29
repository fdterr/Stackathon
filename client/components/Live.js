import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInitial, winExpectancy } from '../store';

import axios from 'axios';

class Live extends Component {
  componentDidMount() {
    this.props.fetchInitials();
  }

  render() {
    return (
      <div>
        {this.props.games.length > 0 ? (
          <div>
            <p>Games Loaded</p>
            {/* <p>{this.props.games}</p> */}
          </div>
        ) : (
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
