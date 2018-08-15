'use strict';

var app = app || {};

(function (module) {



  module.showOnly = selector => {
    $('.container').hide();
    $(selector).show();
  };

  module.render = (templateId, data) => {
    console.log(`#${templateId}`)
    let template = Handlebars.compile($(`#${templateId}`).text());

    return template(data);
  };

})(app);