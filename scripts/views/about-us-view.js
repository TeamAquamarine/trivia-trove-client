'use strict';

var app = app || {};

(function(module){

  const aboutUsView = {};

  aboutUsView.initAboutUsView = () => {
    module.showOnly('#about-us-view');

    $('.talk-bubble').css('visibility','hidden');

    $('.chest').on('click', function() {
      $('.talk-bubble').css('visibility','hidden');
      $(this).siblings().css('visibility','visible');
    })    
  };

  module.aboutUsView = aboutUsView;

})(app);