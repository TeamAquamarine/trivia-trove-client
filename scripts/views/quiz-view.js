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
      
      //Validate answer has been selected and following game logic steps
      if ($('.isSelected').length) {

        //If question is answered correctly
        let isCorrect = $('.isSelected').text().trim() === module.gameController.quiz.questions[localStorage.questionNumber].correct_answer;
        if (isCorrect){
          module.gameController.quiz.incrementScore();
        }

        localStorage.questionNumber = JSON.parse(localStorage.questionNumber) + 1;
        
        if (localStorage.questionNumber == module.gameController.quiz.questions.length){
          localStorage.removeItem('questionNumber');
          page('/highscore');
        } else {
          $('.answerButton').removeClass('isSelected');
          module.gameController.showQuestion();
          };
        }
    })

  };

  module.quizView = quizView;
})(app);