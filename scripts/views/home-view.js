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


    // Add handler here for quiz form that will be making the api call
    // here is the url that the server will eventually need to build and request from API
    // https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple

    $('#play-api-form').on('submit', () => {
      event.preventDefault();
      let category = $('#category-select option:selected').val();
      let difficulty = $('#difficulty-select option:selected').val();
      let amount = $('#question-number-select option:selected').val();
      location.replace(`/play/${amount}/${category}/${difficulty}`);
    })


    //Add function here to populate the custom names into pulldown

  }

  module.homeView = homeView;

})(app);
