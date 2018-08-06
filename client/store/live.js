import axios from 'axios';
import history from '../history';

// /**
//  * ACTION TYPES
//  */
const FETCH_INITIAL = 'FETCH_INITIAL';
const LOAD_DATA = 'LOAD_DATA';
// const SET_HOME_SCORE = 'SET_HOME_SCORE';
// const SET_AWAY_SCORE = 'SET_AWAY_SCORE';
// const SET_RUNNERS = 'SET_RUNNERS';
// const SET_OUTS = 'SET_OUTS';
// const WIN_EXPECTANCY = 'WIN_EXPECTANCY';

/**
 * INITIAL STATE
 */
const defaultState = {
  homeTeam: '',
  awayTeam: '',
  homeScore: 0,
  awayScore: 0,
  probability: 0,
  startTime: '',
  startDate: '',
  homeP: '',
  awayP: '',
  inning: 1,
  batting: '',
};

/**
 * ACTION CREATORS
 */

const loadData = data => {
  return {
    type: LOAD_DATA,
    data,
  };
};

export const fetchInitial = () => {
  return async dispatch => {
    try {
      const { data } = await axios(
        'http://statsapi.mlb.com/api/v1/game/531089/feed/live'
      );
      const homeTeam = data.gameData.teams.home.name.full;
      const awayTeam = data.gameData.teams.away.name.full;
      const start = data.gameData.datetime.timeDate;
      const split = start.split(' ');
      const startTime = split[1];
      const startDate = split[0];
      const inning = data.liveData.plays.currentPlay.about.inning;
      const awayScore = data.liveData.plays.currentPlay.result.awayScore;
      const homeScore = data.liveData.plays.currentPlay.result.homeScore;
      const halfInning = data.liveData.plays.currentPlay.about.halfInning;
      const outs = data.liveData.plays.currentPlay.count.outs;
      let batting;
      console.log('outs', outs);
      if (halfInning == 'bottom') {
        batting = 'homeTeam';
      } else {
        batting = 'awayTeam';
      }
      const runners =
        baseMatch[data.liveData.plays.currentPlay.runnerIndex.toString()];

      console.log(
        'base match:',
        baseMatch[data.liveData.plays.currentPlay.runnerIndex.toString()]
      );

      console.log(homeTeam, awayTeam, startTime, homeScore, awayScore, runners);
      console.log('INITIAL DATA ', data.liveData.plays.scoringPlays);
      console.log('INITIAL DATA ', data.liveData.plays.allPlays[38]);
      dispatch(
        loadData({
          outs,
          batting,
          homeTeam,
          awayTeam,
          inning,
          startTime,
          awayScore,
          homeScore,
          runners,
          startDate,
        })
      );
    } catch (err) {
      console.log(err);
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
    case LOAD_DATA:
      return {
        ...state,
        homeTeam: action.data.homeTeam,
        awayTeam: action.data.awayTeam,
        homeScore: action.data.homeScore,
        awayScore: action.data.awayScore,
        startTime: action.data.startTime,
        startDate: action.data.startDate,
        runners: action.data.runners,
        batting: action.data.batting,
        outs: action.data.outs,
      };
    default:
      return state;
  }
}
