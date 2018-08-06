import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInning, setBatting } from '../store';

class Innings extends Component {
  constructor() {
    super();
  }

  onSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Batter and Inning Input</h3>
        <form name="batting">
          <label>Which Team is Batting?</label>
          <select name="batting">
            <option value="homeTeam">Home Team</option>
            <option value="awayTeam">Away Team</option>
          </select>
        </form>
        <br />
        <form name="inning">
          <label>What Inning is It?</label>
          <label htmlFor="1">1st</label>
          <input type="radio" name="inning" id="1" value="1" />

          <label htmlFor="2">2nd</label>
          <input type="radio" name="inning" id="2" value="2" />

          <label htmlFor="3">3rd</label>
          <input type="radio" name="inning" id="3" value="3" />

          <label htmlFor="4">4th</label>
          <input type="radio" name="inning" id="4" value="4" />

          <label htmlFor="5">5th</label>
          <input type="radio" name="inning" id="5" value="5" />

          <label htmlFor="6">6th</label>
          <input type="radio" name="inning" id="6" value="6" />

          <label htmlFor="7">7th</label>
          <input type="radio" name="inning" id="7" value="7" />

          <label htmlFor="8">8th</label>
          <input type="radio" name="inning" id="8" value="8" />

          <label htmlFor="9">9th</label>
          <input type="radio" name="inning" id="9" value="9" />
        </form>
      </div>
    );
  }
}

// const mapState = state => {
//   return {
//     setInnings:
//   }
// }

const mapDispatch = dispatch => {
  return {
    setInnings: inning => {
      dispatch(setInning(inning));
    },
  };
};

export default connect(null, mapDispatch)(Innings);
