'use strict';

var app = app || {};

(function (module) {

  const gameController = {};

  gameController.createQuiz = function () {
    if (localStorage.currQuiz) {
      localStorage.removeItem('currQuiz');
    };
    if (!localStorage.questionNumber) {
      localStorage.questionNumber = 0;
    }

    this.quiz = new module.Quiz(module.Question.all);

    localStorage.currQuiz = JSON.stringify(this.quiz);

    gameController.questionHtml = module.render('play-template', this.quiz);
    $('#play-view').append(gameController.questionHtml);

    module.gameController.showQuestion();
  }

  gameController.continue = function () {
    this.quiz = new module.Quiz(JSON.parse(localStorage.currQuiz).questions, JSON.parse(localStorage.currQuiz).userScore);
    console.log(this.quiz);
    module.gameController.questionHtml = module.render('play-template', this.quiz);
    $('#play-view').append(module.gameController.questionHtml);

    module.gameController.showQuestion();
  }

  gameController.showQuestion = function () {
    $(`#play-view li`).siblings().hide();
    $(`#play-view div[id ="${localStorage.questionNumber}"]`).parent().fadeIn();
  }

  gameController.gameLogic = function () {
    //Validate answer has been selected and following game logic steps
    if ($('.isSelected').length) {

      //If question is answered correctly
      let isCorrect = $('.isSelected').text().trim() === he.decode(module.gameController.quiz.questions[localStorage.questionNumber].correct_answer);
      if (isCorrect) {
        module.gameController.quiz.incrementScore();
      }

      localStorage.questionNumber = JSON.parse(localStorage.questionNumber) + 1;
      localStorage.currQuiz = JSON.stringify(module.gameController.quiz);
      if (localStorage.questionNumber == module.gameController.quiz.questions.length) {
        localStorage.removeItem('questionNumber');
        localStorage.removeItem('currQuiz');
        page('/highscore');
      } else {
        $('.answerButton').removeClass('isSelected');
        module.gameController.showQuestion();
      };
    }
  }

  module.gameController = gameController;
})(app);