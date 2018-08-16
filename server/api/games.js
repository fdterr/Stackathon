const router = require('express').Router();
const axios = require('axios');

const allGames = [];
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
const baseStringMatch = {
  '1B': 1,
  '2B': 2,
  '3B': 3,
};

router.get('/allgames', (req, res, next) => {
  res.send(allGames);
});

router.get('/testgames', async (req, res, next) => {
  // setInterval(async () => {
  try {
    const { data } = await axios.get(
      'http://statsapi.mlb.com/api/v1/schedule?sportId=1'
    );
    const games = data.dates[0].games;

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
      var runnersNumeric = 1;
      var runners = [];

      /**
       * Current play's runner array
       * if there is no one on base, push 0 for the batter
       */

      console.log('api runners', game.liveData.plays.currentPlay.runners);

      if (!game.liveData.plays.currentPlay.runners) {
        runners.push(0);
      } else {
        /**
         * Otherwise, push 0 for batter, iterate through runners "end" points, match to baseStringMatch, and push onto runners
         */
        runners.push(0);
        game.liveData.plays.currentPlay.runners.forEach(runner => {
          if (baseStringMatch[runner.movement.end]) {
            const endPoint = baseStringMatch[runner.movement.end];
            runners.push(endPoint);
          } else {
          }
        });
      }

      console.log('RUNNERS ARRAY: ', runners);

      // console.log(
      //   'MATCH RESULTS: ',
      //   game.liveData.plays.currentPlay.runners,
      //   gamePk.link
      // );

      // console.log(
      //   'MATCH RESULTS: ',
      //   runnersNumeric,
      //   rawRunners,
      //   parsedRunners,
      //   gamePk.link
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
});
// , 1000);

module.exports = router;
