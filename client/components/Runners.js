import React, { Component } from 'react';
import { setRunners } from '../store';
import { connect } from 'react-redux';

class Runners extends Component {
  handleChange = event => {
    this.props.setRunnerss(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Runners on Base:</h3>
        <div className="runners">
          <div>
            <a>Please select the current baserunner scenario</a>
          </div>
          <div>
            <form name="runners">
              <div className="runnersOptions">
                <div className="runnersOption">
                  <label htmlFor="runners">No One On Base</label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={1}
                  />
                </div>
                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">Runner on First Base Only</label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={2}
                  />
                </div>

                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">Runner on Second Base Only</label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={3}
                  />
                </div>

                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">
                    Runners on First Base and Second Base
                  </label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={4}
                  />
                </div>

                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">Runner on Third Base Only</label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={5}
                  />
                </div>

                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">
                    Runners on First Base and Third Base
                  </label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={6}
                  />
                </div>

                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">
                    Runners on Second Base and Third Base
                  </label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={7}
                  />
                </div>

                <br />
                <div className="runnersOption">
                  <label htmlFor="runners">
                    Bases Loaded (Runners on All Bases)
                  </label>
                  <input
                    className="inputRadio"
                    type="radio"
                    onChange={this.handleChange}
                    name="runners"
                    value={8}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
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
