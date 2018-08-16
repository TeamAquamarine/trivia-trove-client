'use strict';

var app = app || {};

(function (module) {

  const highScoreView = {};

  highScoreView.initHighScore = () => {
    module.showOnly('#highscore-view');
    $('#initials').hide();
  };

  highScoreView.quizComplete = () => {
    module.showOnly('#highscore-view');
    $('#highscore-view table').hide();
    $('#initials').show();
    $('#initials-submit').on('click', function (event) {
      event.preventDefault();
      let initials = $('#form-initials').val(),
        category = $('#form-category').val(),
        score = $('#form-score').val();
      page(`/highscore/submit/${initials}/${category}/${score}`);
    })
  }

  module.highScoreView = highScoreView;

})(app);
