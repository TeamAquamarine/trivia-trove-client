'use strict';

var app = app || {};

// QUIZ MODEL SKELETON, FEEL FREE TO CHANGE -CC
(function (module) {

  function Quiz(questionArr, category, userScore) {
    this.questions = questionArr;
    this.userScore = category;
    this.userScore = userScore || 0;
  }

  Quiz.prototype.incrementScore = function () {
    this.userScore += 500;
    $('#score').text(this.userScore);
  };

  module.Quiz = Quiz;

})(app);
