'use strict';

var app = app || {};

// QUIZ MODEL SKELETON, FEEL FREE TO CHANGE -CC
(function (module) {

  function Quiz(questionData) {
    Object.keys(questionData).forEach(key => this[key] = questionData[key]);
  }

  Quiz.fetchQuestions = (ctx) => {
    $.get(`https://opentdb.com/api.php?amount=${ctx.params.amount}&category=${ctx.params.cat_id}&difficulty=${ctx.params.diff}&type=multiple`)
      .then(res => module.quizView.initQuizView(res.results))
      .catch(err => console.error(err));
  }

  module.Quiz = Quiz;

})(app);
