(function() {
  'use strict';

  angular
    .module('framework7')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {

    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'vm',
      scope: {}
    };

    /** @ngInject */
    function NavbarController($log, $window, $timeout) {

      console.log('¡holiiiii');
      // var myApp = new Framework7();

      var $$ = Dom7;

      $timeout(function() {

        // // Open About popover
        $log.info($$('.popover-periodicity'));
        $$('.popover-periodicity').on('click', function () {
            var clickedLink = this;
            $window.F7.popover('.popover-about', clickedLink);
        });

      }, 2000);

    }

  }

})();
