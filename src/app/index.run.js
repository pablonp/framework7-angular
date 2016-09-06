(function() {
  'use strict';

  angular
    .module('framework7')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $window) {

    $log.debug('runBlock end');
    $window.F7 = new Framework7({
      // add css on index to use material theme
      material: false
      // Only anchors with ajax class
      // ajaxLinks: 'a.ajax'
    });


    $window.$D = Dom7;
  }

})();
