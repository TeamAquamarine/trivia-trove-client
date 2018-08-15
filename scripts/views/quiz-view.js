'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = () => {
    module.showOnly('#play-view');
    module.gameController.createQuiz();
    //TODO: change specificity once submit button is added
    $('.answerButton').on("click", function (event) {
      event.preventDefault();
      $(this).siblings().removeClass('isSelected');
      $(this).addClass('isSelected');
    });

    $('#play-view button[type="submit"]').on('click', function (event) {
      event.preventDefault();
      
      var isCorrect = $('.isSelected').text().trim() === module.gameController.quiz.questions[localStorage.questionNumber].correct_answer;
      if ($('.isSelected').length && isCorrect) {
        module.gameController.quiz.incrementScore();
        $('.answerButton').removeClass('isSelected');
        localStorage.questionNumber = JSON.parse(localStorage.questionNumber) + 1;
        module.gameController.showQuestion();
        if (localStorage.questionNumber === module.gameController.quiz.questions.length){

        }
      };
    })

  };

  module.quizView = quizView;
})(app);