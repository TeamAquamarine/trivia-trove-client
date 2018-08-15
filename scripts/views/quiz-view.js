'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = (ctx) => {
    module.showOnly('#play-view');
    ctx.forEach(element => {
      console.log(element);
    });

  }

  module.quizView = quizView;
})(app);