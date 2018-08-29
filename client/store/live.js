import axios from 'axios';
import history from '../history';

// /**
//  * ACTION TYPES
//  */
const FETCH_INITIAL = 'FETCH_INITIAL';
const LOAD_DATA = 'LOAD_DATA';
const LOADING = 'LOADING';
// const SET_HOME_SCORE = 'SET_HOME_SCORE';
// const SET_AWAY_SCORE = 'SET_AWAY_SCORE';
// const SET_RUNNERS = 'SET_RUNNERS';
// const SET_OUTS = 'SET_OUTS';
// const WIN_EXPECTANCY = 'WIN_EXPECTANCY';

/**
 * INITIAL STATE
 */
const defaultState = {};

/**
 * ACTION CREATORS
 */

const loadData = data => {
  return {
    type: LOAD_DATA,
    data,
  };
};

const loading = () => {
  return {
    type: LOADING,
    loading: true,
  };
};

export const fetchInitial = () => {
  dispatch(loading());
  return async dispatch => {
    try {
      const { data } = await axios.get('/api/games/testgames');
      console.log('data is', data);
      console.table(data);
      dispatch(loadData(data));
    } catch (err) {
      console.error(err);
    }
  };
};

const baseMatch = {
  '0': 1,
  '0,1': 2,
  '0,2': 3,
  '0,1,2': 4,
  '0,3': 5,
  '0,1,3': 6,
  '0,2,3': 7,
  '0,1,2,3': 8,
};

// export const winExpectancy = situation => {
//   return async dispatch => {
//     try {
//       const { data } = await axios.put('/api/calculate', { situation });
//       console.log('axios resopnse', data);
//       dispatch(calculateProbabilty(data));
//     } catch (err) {
//       console.log(err);
//     }
//   };
// };

/**
 * REDUCER
 */
export default function(state = defaultState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading };
    case LOAD_DATA:
      return action.data;
    default:
      return state;
  }
}

// export const setInning = inning => {
//   return {
//     type: SET_INNING,
//     inning,
//   };
// };

// export const setBatting = batting => {
//   return {
//     type: SET_BATTING,
//     batting,
//   };
// };

// export const setHomeScore = score => {
//   return {
//     type: SET_HOME_SCORE,
//     score,
//   };
// };

// export const setAwayScore = score => {
//   return {
//     type: SET_AWAY_SCORE,
//     score,
//   };
// };

// export const setRunners = runners => {
//   return {
//     type: SET_RUNNERS,
//     runners,
//   };
// };

// export const setOuts = outs => {
//   return {
//     type: SET_OUTS,
//     outs,
//   };
// };

// const calculateProbabilty = data => {
//   return {
//     type: WIN_EXPECTANCY,
//     data,
//   };
// };

// /**
//  * Thunky stuff
//  */
