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
      if ($('.isSelected').length){
        console.log(module.gameController.quiz.questions[localStorage.questionNumber].correct_answer);
        console.log($('.isSelected').text());
        if($('.isSelected').text().trim() === module.gameController.quiz.questions[localStorage.questionNumber].correct_answer){
          console.log('trivia master');
        }
      };

    })

  };

  module.quizView = quizView;
})(app);