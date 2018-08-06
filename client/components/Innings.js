import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setInning, setBatting, setOuts } from '../store';

class Innings extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event.target.name);
    if (event.target.name == 'batting') {
      console.log('batting');
      this.props.setBattings(event.target.value);
    } else if (event.target.name == 'inning') {
      console.log('inning');
      this.props.setInnings(event.target.value);
    } else if (event.target.name == 'outs') {
      console.log('outs');
      this.props.setOutss(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <h3>Batter Inning, and Outs Input</h3>

        <form name="batting">
          <div className="battingOptions">
            <div>
              <b>Which Team is Batting?</b>
            </div>
            <div>
              <select name="batting" onChange={this.handleChange}>
                <option value="homeTeam">Home Team</option>
                <option value="awayTeam">Away Team</option>
              </select>
            </div>
          </div>
        </form>
        <br />

        <form name="outs">
          <div className="outs">
            <div>
              <b>How Many Outs Are There?</b>
            </div>
            <div className="outsOptions">
              <label htmlFor="0">0 Outs</label>
              <input
                type="radio"
                name="outs"
                onChange={this.handleChange}
                id="10"
                value="0"
              />
            </div>

            <div className="outsOptions">
              <label htmlFor="1">1 Out</label>
              <input
                type="radio"
                name="outs"
                onChange={this.handleChange}
                id="11"
                value="1"
              />
            </div>

            <div className="outsOptions">
              <label htmlFor="2">2 Outs</label>
              <input
                type="radio"
                name="outs"
                onChange={this.handleChange}
                id="12"
                value="2"
              />
            </div>
          </div>
        </form>
        <br />

        <form name="inning" onSubmit={this.handleSubmit}>
          <div className="inningOptions">
            <div>
              <b>What Inning is It?</b>
            </div>
            <div className="inningOption">
              <label htmlFor="1">1st</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="1"
                value="1"
              />
            </div>

            <div className="inningOption">
              <label htmlFor="2">2nd</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="2"
                value="2"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="3">3rd</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="3"
                value="3"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="4">4th</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="4"
                value="4"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="5">5th</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="5"
                value="5"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="6">6th</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="6"
                value="6"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="7">7th</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="7"
                value="7"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="8">8th</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="8"
                value="8"
              />
            </div>
            <div className="inningOption">
              <label htmlFor="9">9th</label>
              <input
                type="radio"
                onChange={this.handleChange}
                name="inning"
                id="9"
                value="9"
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    inning: state.baseball.inning,
  };
};

const mapDispatch = dispatch => {
  return {
    setInnings: inning => {
      dispatch(setInning(inning));
    },
    setBattings: batting => {
      dispatch(setBatting(batting));
    },
    setOutss: outs => {
      dispatch(setOuts(outs));
    },
  };
};

export default connect(null, mapDispatch)(Innings);
