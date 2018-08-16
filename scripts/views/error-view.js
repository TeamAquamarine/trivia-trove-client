'use strict';

var app = app || {};

(function (module) {

  const errorView = {};

  errorView.initErrorPage = err => {
    console.error(err);
    $('error-view').empty();

    $('error-view').append(module.render('error-view-template', err));
  };

  module.errorView = errorView;

})(app);