// 20220604200935
// https://statsapi.web.nhl.com/api/v1/game/2021030323/linescore

const linescoreStart = {
    "copyright": "NHL and the NHL Shield are registered trademarks of the National Hockey League. NHL and NHL team marks are the property of the NHL and its teams. © NHL 2022. All Rights Reserved.",
    "currentPeriod": 1,
    "currentPeriodOrdinal": "1st",
    "currentPeriodTimeRemaining": "20:00",
    "periods": [
      {
        "periodType": "REGULAR",
        "num": 1,
        "ordinalNum": "1st",
        "home": {
          "goals": 0,
          "shotsOnGoal": 0,
          "rinkSide": "left"
        },
        "away": {
          "goals": 0,
          "shotsOnGoal": 0,
          "rinkSide": "right"
        }
      }
    ],
    "shootoutInfo": {
      "away": {
        "scores": 0,
        "attempts": 0
      },
      "home": {
        "scores": 0,
        "attempts": 0
      }
    },
    "teams": {
      "home": {
        "team": {
          "id": 22,
          "name": "Edmonton Oilers",
          "link": "/api/v1/teams/22"
        },
        "goals": 0,
        "shotsOnGoal": 0,
        "goaliePulled": false,
        "numSkaters": 0,
        "powerPlay": false
      },
      "away": {
        "team": {
          "id": 21,
          "name": "Colorado Avalanche",
          "link": "/api/v1/teams/21"
        },
        "goals": 0,
        "shotsOnGoal": 0,
        "goaliePulled": false,
        "numSkaters": 0,
        "powerPlay": false
      }
    },
    "powerPlayStrength": "Even",
    "hasShootout": false,
    "intermissionInfo": {
      "intermissionTimeRemaining": 0,
      "intermissionTimeElapsed": 0,
      "inIntermission": false
    }
  }

  module.exports = {linescoreStart};