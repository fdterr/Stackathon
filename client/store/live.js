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

export const fetchInitial = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(
        'http://statsapi.mlb.com/api/v1/schedule?sportId=1'
      );
      const games = data.dates[0].games;
      // console.log('ALL GAMES', games);

      const allGames = [];
      games.forEach(async gamePk => {
        const response = await axios(`http://statsapi.mlb.com/${gamePk.link}`);
        const game = response.data;
        const homeTeam = game.gameData.teams.home.name.full;
        const awayTeam = game.gameData.teams.away.name.full;
        const start = game.gameData.datetime.timeDate;
        const split = start.split(' ');
        const startTime = split[1];
        const startDate = split[0];
        const inning = game.liveData.plays.currentPlay.about.inning;
        const awayScore = game.liveData.plays.currentPlay.result.awayScore;
        const homeScore = game.liveData.plays.currentPlay.result.homeScore;
        const halfInning = game.liveData.plays.currentPlay.about.halfInning;
        const outs = game.liveData.plays.currentPlay.count.outs;
        let batting;
        // console.log('outs', outs);
        if (halfInning == 'bottom') {
          batting = 'homeTeam';
        } else {
          batting = 'awayTeam';
        }
        var runnersNumeric;
        var runners;

        // console.log(
        //   'previous play ',
        //   game.liveData.plays.allPlays[game.liveData.plays.allPlays.length - 1]
        //     .runnerIndex
        // );

        if (!game.liveData.plays.currentPlay.runnerIndex) {
          runnersNumeric = 0;
        } else {
          const rawRunners = game.liveData.plays.currentPlay.runnerIndex;
          const parsedRunners = rawRunners.join(',');
          runnersNumeric = baseMatch[parsedRunners];

          console.log(
            'MATCH RESULTS: ',
            game.liveData.plays.currentPlay.runners,
            gamePk.link
          );

          // console.log(
          //   'MATCH RESULTS: ',
          //   runnersNumeric,
          //   rawRunners,
          //   parsedRunners,
          //   gamePk.link
          // );
        }

        // baseMatch[game.liveData.plays.currentPlay.runnerIndex.length] || 0;
        // console.log(
        //   'base match:',
        //   baseMatch[game.liveData.plays.currentPlay.runnerIndex.toString()]
        // );

        // console.log(
        //   homeTeam,
        //   awayTeam,
        //   startTime,
        //   homeScore,
        //   awayScore,
        //   runners
        // );

        const wholeGame = {
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
        };
        allGames.push(wholeGame);
      });
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
