'use strict';

var app = app || {};

// QUIZ MODEL SKELETON, FEEL FREE TO CHANGE -CC
(function (module) {

  function Quiz(questionArr) {
    this.questions = questionArr;
    this.userScore = 0;
  }

  Quiz.prototype.incrementScore = function () {
    this.userScore++;
  };

  module.Quiz = Quiz;

})(app);
