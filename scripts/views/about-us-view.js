'use strict';

var app = app || {};

(function(module){

  const aboutUsView = {};

  module.initAboutUsView = () => {
    module.showOnly('#about-us-view');

    $('.chest').on('click', () => {
      $('#talk-bubble').hide();
      $(this).siblings().show();
    })    
  };

  module.aboutUsView = aboutUsView;

})(app);