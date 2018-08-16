'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = () => {
    $('#play-view').empty();
    module.showOnly('#play-view');
    
    module.gameController.createQuiz();
    //TODO: change specificity once submit button is added
    $('.answerButton').on("click", function (event) {
      event.preventDefault();
      $(this).siblings().removeClass('isSelected');
      $(this).addClass('isSelected');
    });

    $('#play-view button[type="submit"]').on('click', function (event) {    event.preventDefault();
      
      module.gameController.gameLogic();
    })
  };

  quizView.initContinue = () => {

    $('#play-view').empty();
    module.showOnly('#play-view');

    module.gameController.continue();

    $('.answerButton').on("click", function (event) {
      event.preventDefault();
      $(this).siblings().removeClass('isSelected');
      $(this).addClass('isSelected');
    });

    $('#play-view button[type="submit"]').on('click', function (event) {    event.preventDefault();
      
      module.gameController.gameLogic();
    })

  }

  module.quizView = quizView;
})(app);