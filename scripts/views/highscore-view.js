'use strict';

var app = app || {};

(function (module) {

  const highScoreView = {};

  highScoreView.initHighScore = () => {
    module.showOnly('#highscore-view');
    $('#highscore-tbody').empty();
    //prevents duplicate submission errors the next time
    $('#initials-submit').off('click');
    $('#initials').hide();
    
    module.Highscore.fetchall(() => {
      console.log('hi');
      let tableData = module.render('highscore-template', module.Highscore.all);
      $('#highscore-tbody').append(tableData);
      $('#highscore-table').show();
      console.log(module.Highscore.all);
      
    });

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
