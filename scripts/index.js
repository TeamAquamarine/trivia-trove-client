'use strict';

var app = app || {};

(function (module) {

  $('#hamburger-menu').on('click', () => {
    $('#navbar').slideToggle(275);
  })

  let prodApiUrl = 'https://secure-oasis-88504.herokuapp.com';
  let devApiUrl = 'http://localhost:3000';

  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);
  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? prodApiUrl : devApiUrl
  }

  Handlebars.registerHelper('list', function (context, options) {
    var out = "<ul>", data;

    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }

    for (var i = 0; i < context.length; i++) {
      if (data) {
        data.index = i;
      }

      out += "<li>" + options.fn(context[i], { data: data }) + "</li>";
    }

    out += "</ul>";
    return out;
  });

  Handlebars.registerHelper('answers', function (context, options) {
    var out = "<div>", data;

    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }

    for (var i = 0; i < context.length; i++) {
      if (data) {
        data.index = i;
      }

      out += '<button class="answerButton">' + options.fn(context[i], { data: data }) + "</button>";
    }

    out += "</div>";
    return out;
  });



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