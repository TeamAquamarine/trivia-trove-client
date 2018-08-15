'use strict';

var app = app || {};

(function (module) {

  Handlebars.registerHelper('list', function(context, options) {
    var ret = "<ul>";
   
    for(var i=0, j=context.length; i<j; i++) {
      ret = ret + "<li>" + options.fn(context[i]) + "</li>";
    }
   
    return ret + "</ul>";
   });

   Handlebars.registerHelper('list', function(context, options) {
    var out = "<ul>", data;
  
    if (options.data) {
      data = Handlebars.createFrame(options.data);
    }
  
    for (var i=0; i<context.length; i++) {
      if (data) {
        data.index = i;
      }
  
      out += "<li>" + options.fn(context[i], { data: data }) + "</li>";
    }
  
    out += "</ul>";
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