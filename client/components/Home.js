import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export default function Home(props) {
  // const { email } = props;

  return (
    <div className="test">
      <h3>Welcome Baseball Lovers!</h3>
    </div>
  );
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     email: state.user.email,
//   };
// };

// export default connect(mapState)(Home);

/**
 * PROP TYPES
 */
// UserHome.propTypes = {
//   email: PropTypes.string,
// };
