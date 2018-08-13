'use strict';

var app = app || {};

(function (module) {



  module.showOnly = selector => {
    $('.container').hide();
    $(selector).show();
  };

  // do we want this?
  // module.render = (templateId, data) => {
  //
  //}
})(app);