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
    $('#initials').show();
    $('#highscore').hide();
    $('#intials-submit').on('click', console.log('new score'));
  }

  module.highScoreView = highScoreView;

})(app);
