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

/**
 * INITIAL STATE
 */
const defaultState = {
  inning: 1,
  batting: 'homeTeam',
  homeScore: -1,
  awayScore: -1,
  runners: 0,
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
    default:
      return state;
  }
}
