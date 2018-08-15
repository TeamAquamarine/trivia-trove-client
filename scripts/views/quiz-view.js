'use strict';

var app = app || {};

(function (module) {

  const quizView = {};

  quizView.initQuizView = () => {
    module.showOnly('#play-view');

  };

  module.quizView = quizView;
})(app);