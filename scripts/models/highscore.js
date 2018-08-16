'use strict';

var app = app || {};

(function(module){
  
  const highscore = {};

  highscore.finalScore = function () {
    localStorage.finalScore = module.gameController.quiz.userScore;
  }

  module.highscore = highscore;

})(app);