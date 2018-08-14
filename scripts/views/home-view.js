'use strict';

var app = app || {};

(function (module) {

  const homeView = {};

  homeView.initHomeView = (ctx, next) => {
    module.showOnly('#home-view');

    //Add function here to populate the options for quiz categories
    module.Categories.all.forEach(category => {
      let $option = `<option value=${category.id}>${category.name}</option>`;
      $('#category-select').append($option);
    });

    //Add function here to populate the custom names into pulldown

  }

  module.homeView = homeView;

})(app);
