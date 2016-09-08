(function() {
  'use strict';

  angular
    .module('framework7')
    .directive('menu', menu);

  /** @ngInject */
  function menu() {

    return {
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      controller: MenuController,
      controllerAs: 'vm',
      scope: {}
    };

    /** @ngInject */
    function MenuController($log, $window, $timeout) {

      var vm = this;

      vm.periodicity = {
        min1: '1 min',
        min5: '5 min',
        min15: '15 min',
        hour1: '1 hour',
        day1: '1 day',
        day5: '5 day'
      };
      vm.currentPeriodicity = vm.periodicity.min5;
      
      vm.selectPeriodicity = function(periodicity){
        console.log(periodicity)
        vm.currentPeriodicity = periodicity;
        $window.F7.closeModal('.popover-periodicity');
        
      };
      // var myApp = new Framework7();

      // var $$ = Dom7;

      // $timeout(function() {

      //   // // Open About popover
      //   $log.info($$('.popover-periodicity'));
      //   $$('.popover-periodicity').on('click', function () {
      //       var clickedLink = this;
      //       $window.F7.popover('.popover-about', clickedLink);
      //   });

      // }, 2000);

    }

  }

})();
