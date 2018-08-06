import axios from 'axios';
import history from '../history';

/**
 * ACTION TYPES
 */
const SET_INNING = 'SET_INNING';
const SET_BATTING = 'SET_BATTING';
const SET_SCORE = 'SET_SCORE';

/**
 * INITIAL STATE
 */
const defaultState = {
  inning: 1,
  batting: 'homeTeam',
  scoreDifference: 0,
};

/**
 * ACTION CREATORS
 */

export const setInning = inning => {
  type: SET_INNING, inning;
};

export const setBatting = batting => {
  return {
    type: SET_BATTING,
    batting,
  };
};

export const setScore = scoreDifference => {
  return {
    type: SET_SCORE,
    scoreDifference,
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
    default:
      return state;
  }
}
