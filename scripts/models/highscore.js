'use strict';

var app = app || {};

(function (module) {

  function Highscore(highscoreData) {
    Object.keys(highscoreData).forEach(key => this[key] = highScoreData[key]);
  }

  Highscore.all = [];

  // Highscore.loadAll = (highscoreArray) => Highscore.all = highscoreArray
  //     .sort((a, b) => a.score - b.score)
  //     .map(score => new Highscore(score));

  Highscore.fetchall = (callback) => {
    $.get(`${module.ENVIRONMENT.apiUrl}/api/v1/highscores`)
      .then(results => highscore.all = results)
      .then(callback)
      .catch(err => console.error(err));

  }

  Highscore.postHighscore = function (ctx) {
    let highscore = {
      initials: ctx.params.initials,
      category: ctx.params.category,
      score: ctx.params.score
    }
    $.post(`${module.ENVIRONMENT.apiUrl}/api/v1/highscores`, highscore)
      .then(() => localStorage.removeItem('finalScore'))
      .then(() => page('/highscore'))
      .catch(err => console.error(err));
  }


  Highscore.finalScore = function () {
    localStorage.finalScore = module.gameController.quiz.userScore;
  }

  module.Highscore = Highscore;

})(app);