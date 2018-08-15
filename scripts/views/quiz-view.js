'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = () => {
    module.showOnly('#play-view');
    module.gameController.createQuiz();
    //TODO: change specificity once submit button is added
    $('#play-view button').on("click", function (event) {
      event.preventDefault();
      $(this).siblings().removeClass('isSelected');
      $(this).addClass('isSelected');
    });

  };

  module.quizView = quizView;
})(app);