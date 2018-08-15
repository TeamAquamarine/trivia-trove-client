'use strict';

var app = app || {};

(function (module) {


  // Below is an implementation of the Durstenfeld shuffle
  // Borrowed near verbatim from Laurens Holst on Stack Overflow, var names changed for our case
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  function shuffleAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

  function Question(questionData) {
    Object.keys(questionData).forEach(key => this[key] = questionData[key]);
    let allAnswers = this.incorrect_answers.slice(0);
    allAnswers.push(this.correct_answer);
    shuffleAnswers(allAnswers);
    this.possibleAnswers = allAnswers;
  }

  Question.all = [];

  Question.loadAll = (questionArr) => {
    Question.all = [];
    questionArr.forEach(question => Question.all.push(new Question(question)));
  }

  Question.fetchQuestions = (ctx) => {
    $.get(`https://opentdb.com/api.php?amount=${ctx.params.amount}&category=${ctx.params.cat_id}&difficulty=${ctx.params.diff}&type=multiple`)
      .then(res => Question.loadAll(res.results))
      .catch(err => console.error(err));
  }

  module.Question = Question;

})(app);