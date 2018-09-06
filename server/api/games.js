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

const fetchInitial = async () => {
  await fetchGames();
};

const fetchGames = async () => {
  try {
    allGames.splice(0, allGames.length);
    const { data } = await axios.get(
      'http://statsapi.mlb.com/api/v1/schedule?sportId=1'
    );
    if (!data.length) {
      return;
    }
    const games = data.dates[0].games;
    for (let i = 0; i < games.length; i++) {
      const oneGame = games[i];
      // console.log('onegame object is ', oneGame);
      if (oneGame.status.abstractGameState !== 'Preview')
        await gameData(oneGame);
    }
    console.log('all games is', allGames);
  } catch (err) {
    console.log(err);
  }
};

const gameData = async function(oneGame) {
  const gameLink = `http://statsapi.mlb.com/${oneGame.link}`;
  // console.log('game link is', gameLink);

  const response = await axios(gameLink);
  const game = await response.data;

  const result = game.liveData.plays.currentPlay.result.event || '';

  let batting;
  const start = game.gameData.datetime.timeDate;
  const split = start.split(' ');
  const runners = game.liveData.plays.currentPlay.runners;
  const homeAbbrev = game.gameData.teams.home.name.abbrev;
  const awayAbbrev = game.gameData.teams.away.name.abbrev;
  const homeTeam = game.gameData.teams.home.name.full;
  const awayTeam = game.gameData.teams.away.name.full;
  const startTime = split[1];
  const startDate = split[0];
  let inning = game.liveData.plays.currentPlay.about.inning;
  const awayScore = game.liveData.linescore.away.runs;
  const homeScore = game.liveData.linescore.home.runs;
  const halfInning = game.liveData.plays.currentPlay.about.halfInning;
  const outs = game.liveData.plays.currentPlay.count.outs;
  const strikes = game.liveData.plays.currentPlay.count.strikes;
  const balls = game.liveData.plays.currentPlay.count.balls;

  if (halfInning == 'bottom') {
    batting = 'homeTeam';
  } else {
    batting = 'awayTeam';
  }

  if (outs === 3) {
    inning++;
    batting = batting === 'homeTeam' ? 'awayTeam' : 'homeTeam';
  }

  let baseSituation;
  if (runners.length > 0) {
    if (result === '') {
      baseSituation = calcRunners(runners, 'start', result);
    } else {
      baseSituation = calcRunners(runners, 'end', result);
    }
  } else {
    baseSituation = [0];
  }

  const homeHits = game.liveData.linescore.home.hits;
  const awayHits = game.liveData.linescore.away.hits;
  const homeErrors = game.liveData.linescore.home.errors;
  const awayErrors = game.liveData.linescore.away.errors;

  const wholeGame = {
    outs,
    batting,
    homeTeam,
    awayTeam,
    inning,
    startTime,
    awayScore,
    homeScore,
    runners: baseSituation,
    startDate,
    balls,
    strikes,
    homeAbbrev,
    awayAbbrev,
    homeHits,
    awayHits,
    homeErrors,
    awayErrors,
  };

  allGames.push(wholeGame);
};

const calcRunners = (runners, type, result) => {
  const runnersArray = [];
  runnersArray.push(0);
  for (let i = runners.length - 1; i >= 0; i--) {
    let proceed = false;
    if (result === 'atBat' && runners[i].details.event === '') {
      proceed = true;
    }
    if (runners[i].details.event === result) {
      proceed = true;
    }

    if (proceed) {
      let endBase = runners[i].movement[type] || '';
      // console.log('end base is', endBase === '' ? 'empty string' : endBase);
      // console.log(endBase === '1B' || endBase === '2B' || endBase === '3B');
      if (endBase === '3B') {
        runnersArray.push(3);
      } else if (endBase === '2B') {
        runnersArray.push(2);
      } else if (endBase === '1B') {
        runnersArray.push(1);
      }
    }
  }
  runnersArray.sort();
  return runnersArray;
};

fetchInitial().then(
  setInterval(async () => {
    console.log('awaiting to fetch');
    await fetchGames();
    console.log('fetched');
  }, 60000)
);

module.exports = router;
