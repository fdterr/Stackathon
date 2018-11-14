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

const nameAbbrevMatch = {
  'Boston Red Sox': 'BOS',
  'New York Yankees': 'NYY',
  'Tampa Bay Rays': 'TB',
  'Baltimore Orioles': 'BAL',
  'Toronto Blue Jays': 'TOR',
  'Detroit Tigers': 'DET',
  'Cleveland Indians': 'CLE',
  'Kansas City Royals': 'KCA',
  'Minnesota Twins': 'MIN',
  'Chicago White Sox': 'CHA',
  'Oakland Athletics': 'OAK',
  'Texas Rangers': 'TEX',
  'Los Angeles Angels': 'LAA',
  'Seattle Mariners': 'SEA',
  'Houston Astros': 'HOU',
  'Atlanta Braves': 'ATL',
  'Washington Nationals': 'WSH',
  'Philadelphia Phillies': 'PHI',
  'New York Mets': 'NYM',
  'Miami Marlins': 'MIA',
  'Pittsburgh Pirates': 'PIT',
  'St. Louis Cardinals': 'STL',
  'Cincinnati Reds': 'CIN',
  'Chicago Cubs': 'CHC',
  'Milwaukee Brewers': 'MIL',
  'Los Angeles Dodgers': 'LAD',
  'Arizona Diamondbacks': 'ARI',
  'Colorado Rockies': 'COL',
  'San Francisco Giants': 'SFN',
  'San Diego Padres': 'SDN',
};

router.get('/allgames', (req, res, next) => {
  res.send(
    allGames.sort((a, b) => {
      let aI = a['state'] == 'I';
      let aF = a['state'] == 'F' || a['state'] == 'O';
      let bI = b['state'] == 'I';
      let bF = b['state'] == 'F' || b['state'] == 'O';

      let aName = a['homeTeam'].toString();
      let bName = b['homeTeam'].toString();

      if (aF && bF) {
        return aName > bName ? -1 : 1;
      } else if (aI && bI) {
        return aName > bName ? -1 : 1;
      } else if (aI && bF) {
        return -1;
      } else if (aI && !bF && !bI) {
        return -1;
      } else if (aF && bI) {
        return 1;
      } else if (bI && !aI && !aF) {
        return 1;
      } else if (aF && !bF && !bI) {
        return -1;
      } else if (bF && !aI && !aF) {
        return 1;
      } else {
        return aName > bName ? -1 : 1;
      }
    })
  );
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

    const games = data.dates[0].games;
    for (let i = 0; i < games.length; i++) {
      const oneGame = games[i];
      // console.log('onegame object is ', oneGame);
      // if (oneGame.status.abstractGameState !== 'Preview')
      await gameData(oneGame);
    }
    // console.log('all games is', allGames);
  } catch (err) {
    console.log(err);
  }
};

const gameData = async function(oneGame) {
  const gameLink = `http://statsapi.mlb.com/${oneGame.link}`;
  // console.log('game date is', oneGame.gameDate);

  const response = await axios(gameLink);
  const game = response.data;

  let result;
  let split;
  let start;
  let runners = [];
  let inning = 1;
  let homeScore = 0;
  let awayScore = 0;
  let halfInning;
  let outs;
  let strikes;
  let balls;
  let homeHits = 0;
  let awayHits = 0;
  let homeErrors = 0;
  let awayErrors = 0;

  let state = oneGame.status.codedGameState;

  /** Is this game still in preview? */
  let preview;
  if (state != 'I') {
    if (state == 'P' || state == 'D' || state == 'S') {
      preview = true;
    } else if (state == 'F' || state == 'O') {
      preview = false;
    } else {
      preview = true;
    }
  } else {
    preview = false;
  }
  /** End */

  /** Hitter & Pitcher? */
  let pitcher;
  let batter;

  if (preview) {
    split = oneGame.gameDate.split('T');
    split[1] = split[1].slice(0, -1);
  } else {
    // console.log(
    //   'gameLink is',
    //   gameLink,
    //   'home lineScore',
    //   game.liveData.linescore.home,
    //   'away lineScore',
    //   game.liveData.linescore.away
    // );
    result = game.liveData.plays.currentPlay.result.event || '';
    start = game.gameData.datetime.timeDate;
    split = start.split(' ');
    runners = baseMatch[game.liveData.plays.currentPlay.runners];
    inning = game.liveData.plays.currentPlay.about.inning;
    awayScore = game.liveData.linescore.away.runs;
    homeScore = game.liveData.linescore.home.runs;
    halfInning = game.liveData.plays.currentPlay.about.halfInning;
    outs = game.liveData.plays.currentPlay.count.outs;
    strikes = game.liveData.plays.currentPlay.count.strikes;
    balls = game.liveData.plays.currentPlay.count.balls;
    homeHits = game.liveData.linescore.home.hits;
    awayHits = game.liveData.linescore.away.hits;
    homeErrors = game.liveData.linescore.home.errors;
    awayErrors = game.liveData.linescore.away.errors;
    let pitcherId = 'ID' + game.liveData.plays.currentPlay.matchup.pitcher;
    let batterId = 'ID' + game.liveData.plays.currentPlay.matchup.batter;
    pitcher =
      game.liveData.players.allPlayers[pitcherId].name.last +
      ', ' +
      game.liveData.players.allPlayers[pitcherId].name.first[0] +
      '.';
    batter =
      game.liveData.players.allPlayers[batterId].name.last +
      ', ' +
      game.liveData.players.allPlayers[batterId].name.first[0] +
      '.';
  }

  if (state == 'F' || state == 'D') {
    inning = 'Final';
  }

  // console.log(oneGame);
  let batting;
  const homeAbbrev = nameAbbrevMatch[oneGame.teams.home.team.name];
  const awayAbbrev = nameAbbrevMatch[oneGame.teams.away.team.name];
  const homeTeam = oneGame.teams.home.team.name;
  const awayTeam = oneGame.teams.away.team.name;
  const startDate = split[0];

  // Start Time
  let startTime;
  let time = game.gameData.datetime.time;
  // let timeSplit = time.split(':');
  // let hours = timeSplit[0];
  // let minutes = timeSplit[1];
  // hours = hours - +game.gameData.venue.timeZone.offset - 4;
  // startTime = hours + ':' + minutes + ' PM ET';
  startTime = time + ' PM ET';

  // Who is Batting?
  if (halfInning == 'bottom') {
    batting = 'homeTeam';
  } else {
    batting = 'awayTeam';
  }

  if (outs === 3) {
    inning++;
    batting = batting === 'homeTeam' ? 'awayTeam' : 'homeTeam';
  }

  // Runners Are?
  let baseSituation;
  if (runners && runners.length > 0) {
    if (result === '') {
      baseSituation = calcRunners(runners, 'start', result);
    } else {
      baseSituation = calcRunners(runners, 'end', result);
    }
  } else {
    baseSituation = [0];
  }

  const wholeGame = {
    outs,
    batting,
    homeTeam,
    awayTeam,
    inning,
    awayScore,
    homeScore,
    runners: baseSituation,
    startDate,
    startTime,
    balls,
    strikes,
    homeAbbrev,
    awayAbbrev,
    homeHits,
    awayHits,
    homeErrors,
    awayErrors,
    preview,
    state,
    pitcher,
    batter,
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

// fetchInitial()
//   .then(console.log('have fetchedInitial'))
//   .then(
//     setInterval(async () => {
//       console.log('awaiting to fetch');
//       await fetchGames();
//       console.log('fetched');
//     }, 60000)
//   );

module.exports = router;
