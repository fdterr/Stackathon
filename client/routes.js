import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Home, Calculator, Live } from './components';
import { me } from './store';

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    // this.props.loadInitialData();
    this.props.history.push('/home');
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <Switch>
          {/* Routes placed here are available to all visitors */}
          <Route path="/home" component={Home} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/live" component={Live} />
          {/* <Route path="/signup" component={Signup} /> */}
        </Switch>
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    // isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = dispatch => {
  return {
    // loadInitialData() {
    //   dispatch(me());
    // },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired,
// };
