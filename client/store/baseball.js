import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const SET_INNING = 'SET_INNING';
const SET_BATTING = 'SET_BATTING';
const SET_HOME_SCORE = 'SET_HOME_SCORE';
const SET_AWAY_SCORE = 'SET_AWAY_SCORE';
const SET_RUNNERS = 'SET_RUNNERS';
const SET_OUTS = 'SET_OUTS';
const WIN_EXPECTANCY = 'WIN_EXPECTANCY';

/**
 * INITIAL STATE
 */
const defaultState = {
  inning: 1,
  batting: 'homeTeam',
  homeScore: -1,
  awayScore: -1,
  runners: 1,
  outs: 0,
  probability: 0,
  totalWins: 0,
  totalGames: 0,
};

/**
 * ACTION CREATORS
 */

export const setInning = inning => {
  return {
    type: SET_INNING,
    inning,
  };
};

export const setBatting = batting => {
  return {
    type: SET_BATTING,
    batting,
  };
};

export const setHomeScore = score => {
  return {
    type: SET_HOME_SCORE,
    score,
  };
};

export const setAwayScore = score => {
  return {
    type: SET_AWAY_SCORE,
    score,
  };
};

export const setRunners = runners => {
  return {
    type: SET_RUNNERS,
    runners,
  };
};

export const setOuts = outs => {
  return {
    type: SET_OUTS,
    outs,
  };
};

const calculateProbabilty = data => {
  return {
    type: WIN_EXPECTANCY,
    data,
  };
};

/**
 * Thunky stuff
 */

export const winExpectancy = situation => {
  return async dispatch => {
    try {
      const { data } = await axios.put('/api/calculate', { situation });
      console.log('axios resopnse', data);
      dispatch(calculateProbabilty(data));
    } catch (err) {
      console.log(err);
    }
  };
};

/**
 * REDUCER
 */
export default function(state = defaultState, action) {
  switch (action.type) {
    case SET_INNING:
      return { ...state, inning: action.inning };
    case SET_BATTING:
      return { ...state, batting: action.batting };
    case SET_HOME_SCORE:
      return {
        ...state,
        homeScore: action.score,
      };
    case SET_AWAY_SCORE:
      return {
        ...state,
        awayScore: action.score,
      };
    case SET_RUNNERS:
      return {
        ...state,
        runners: action.runners,
      };
    case SET_OUTS:
      return {
        ...state,
        outs: action.outs,
      };
    case WIN_EXPECTANCY:
      return {
        ...state,
        probability: action.data.probability,
        totalGames: action.data.totalGames,
        totalWins: action.data.totalWins,
      };
    default:
      return state;
  }
}
