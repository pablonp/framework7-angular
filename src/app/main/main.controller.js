(function() {
  'use strict';

  angular
    .module('framework7')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    // Needed to load ajax web pages
    var mainView = $window.F7.addView('.view-main');


    // Init app
    // var myApp = new Framework7();

    // // Init main view
    // var mainView = myApp.addView('.view-main');

    // // HTML Content of new page:
    // var newPageContent = '<div class="page" data-page="my-page">' +
    //                         '<div class="page-content">' +
    //                           '<p>Here comes new page</p>' +
    //                         '</div>' +
    //                       '</div>';

    // //Load new content as new page
    // mainView.router.loadContent(newPageContent);
  }

})();
