'use strict';

var app = app || {};

(function(module){

  module.initHomeView() = (ctx) => {
    app.showOnly('#home-view');

    //Add function here to populate the options for quiz categories
    ctx.forEach(category => {
      let $option = `<option value=${category[0]}>${category[0]}</option>`;
      $('#category-select').append($option);
    }

    //Add function here to populate the custom names into pulldown

  };

})(app);