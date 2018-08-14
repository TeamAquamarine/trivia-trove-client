'use strict';

var app = app || {};

// QUIZ MODEL SKELETON, FEEL FREE TO CHANGE -CC
(function (module) {

  function Quiz(questionData) {
    Object.keys(questionData).forEach(key => this[key] = questionData[key]);
  }

  module.Quiz = Quiz;

})(app);
