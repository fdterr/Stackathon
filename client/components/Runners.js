import React, { Component } from 'react';
import { setRunners } from '../store';
import { connect } from 'react-redux';

class Runners extends Component {
  handleChange = event => {
    console.log(event.target.name, event.target.value);
    this.props.setRunnerss(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Runners on Base:</h3>
        <a>Please select the current baserunner scenario</a>
        <form name="runners">
          <div>
            <label htmlFor="runners">Bases Empty</label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={1}
            />
          </div>
          <br />
          <div>
            <label htmlFor="runners">Runner on First Base Only</label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={2}
            />
          </div>

          <br />
          <div>
            <label htmlFor="runners">Runner on Second Base Only</label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={3}
            />
          </div>

          <br />
          <div>
            <label htmlFor="runners">
              Runners on First Base and Second Base
            </label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={4}
            />
          </div>

          <br />
          <div>
            <label htmlFor="runners">Runner on Third Base Only</label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={5}
            />
          </div>

          <br />
          <div>
            <label htmlFor="runners">
              Runners on First Base and Third Base
            </label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={6}
            />
          </div>

          <br />
          <div>
            <label htmlFor="runners">
              Runners on Second Base and Third Base
            </label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={7}
            />
          </div>

          <br />
          <div>
            <label htmlFor="runners">Bases Loaded (Runners on All Bases)</label>
            <input
              type="radio"
              onChange={this.handleChange}
              name="runners"
              value={8}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    setRunnerss: runners => {
      dispatch(setRunners(runners));
    },
  };
};

export default connect(null, mapDispatch)(Runners);
