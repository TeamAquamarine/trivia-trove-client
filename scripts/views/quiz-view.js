'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = (ctx) => {
    module.showOnly('#play-view');
    console.log(ctx);

  }

  module.quizView = quizView;
})(app);