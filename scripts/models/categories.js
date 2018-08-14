'use strict';

var app = app || {};

(function(module){

  function Categories(apiCategoriesData) {
    Object.keys(apiCategoriesData).forEach(key => this[key] = apiCategoriesData[key]);
  };

  Categories.all = [];

  Categories.loadAll = options => Categories.all = options
    .sort(( a, b) => a.category - b.category)
    .map(category => new Category(category));

  Categories.fetchAll = callback => 
    {$.get(`http://localhost:3000/api/v1/categories`)
      .then(Categories.loadAll)
      .then(callback)
      .catch(errorCallback);}

})(app);