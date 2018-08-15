'use strict';

var app = app || {};

(function (module) {

  const gameController = {};

  gameController.createQuiz = function() {
    this.quiz = new module.Quiz(module.Question.all);

    if (!localStorage.questionNumber) {
      localStorage.questionNumber = 0;
    }
    console.log(this.quiz.questions[localStorage.questionNumber]);
    let questionHtml = module.render('play-template', this.quiz.questions[localStorage.questionNumber]);
    $('#play-view').append(questionHtml);


  }
  //create the quiz
  //tell the quizview to show a question
  //tell the quizview to show the next question 
  //tell quiz to increment the score
  //end the quiz based on the quiz view clicking finished quiz
  //tell the quiz to route us to high score page
  //save quiz state to local storage
  module.gameController = gameController;
})(app);