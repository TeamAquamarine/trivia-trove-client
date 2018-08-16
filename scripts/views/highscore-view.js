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
    $('#initials-submit').on('click', function () {
      
    })
  }

  module.highScoreView = highScoreView;

})(app);
