'use strict';

var app = app || {};

(function (module) {



  module.showOnly = selector => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    let template = Handlebars.compile(`${templateId}`).text();

    return template(data);
  };

})(app);