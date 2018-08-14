'use strict';

var app = app || {};

(function (module) {

  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function Categories(apiCategoriesData) {
    Object.keys(apiCategoriesData).forEach(key => this[key] = apiCategoriesData[key]);
  };

  Categories.all = [];

  Categories.loadAll = catArr => Categories.all = catArr
    .sort((a, b) => a.name - b.name)
    .map(category => new Categories(category));

  Categories.fetchAll = callback => {
    $.get(`http://localhost:3000/api/v1/categories`)
      .then(res => Categories.loadAll(res))
      .then(callback)
      .catch(errorCallback);
  }

  module.Categories = Categories;

})(app);