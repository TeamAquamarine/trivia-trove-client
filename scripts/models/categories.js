'use strict';

var app = app || {};

(function(module){


  function Categories(apiCategoriesData) {
    Object.keys(apiCategoriesData).forEach(key => this[key] = apiCategoriesData[key]);
  };

  Categories.all = [];

  Categories.loadAll = catArr => Categories.all = catArr
    .sort(( a, b) => a.name - b.name)
    .map(category => new Category(category));

  Categories.fetchAll = callback => 
    {$.get(`http://localhost:3000/api/v1/categories`)
      .then(res => Categories.loadAll(res))
      .then(callback)
      .catch(errorCallback);}

})(app);