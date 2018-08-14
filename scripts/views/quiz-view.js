'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = (ctx) => {
    module.showOnly('#play-view');
    console.log(ctx);
    $.get(`https://opentdb.com/api.php?amount=${ctx.params.amount}&category=${ctx.params.cat_id}&difficulty=${ctx.params.diff}&type=multiple`)
      .then(res => console.log(res));
  }

  module.quizView = quizView;
})(app);