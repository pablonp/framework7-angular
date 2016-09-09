(function() {
  'use strict';

  angular
    .module('framework7')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, $window) {

    var self = {};

    // Needed to load ajax web pages
    var mainView = $window.F7.addView('.view-main', {
      dynamicNavbar: true
    });

    self.stxx = new STXChart({
      container: $$$('.chartContainer'),
      cleanupGaps: false,
      layout: {
        'candleWidth': 16,
        'crosshair': true
      }
    });

    self.stxx.cleanupGaps = false;
    self.stxx.layout.crosshair = false;
    self.stxx.manageTouchAndMouse = true;
    self.stxx.chart.yAxis.goldenRatioYAxis=true;
    self.stxx.dataSetContainsGaps = false;
    self.stxx.chart.yAxis.position="right";
    self.stxx.preferences.whitespace=0;
    self.stxx.dontRoll = false;

    var historyData = [{
      Adj_Close: 18526.9,
      Close: 18526.9,
      DT: new Date(),
      Date: "2016-07-27 19:00",
      High: 18530,
      Low: 18519.9,
      Open: 18520.1,
      Timestamp: 1469646000000,
      Volume: 0,
      displayDate: new Date()
    }];
    self.stxx.newChart('market', historyData, self.stxx.chart, null);


    var toSelect = ['ma', 'ema', 'tma', 'vma', 'wma', 'tsma', 'ssma', 'vdma'];

    var compiledTemplates = {
      slider: '',
      smartSelect: '',
      get: function(key) {

        if (_.isEmpty(this[key])) {

          var template = angular.element('#' + key).html();
          // compile it with Template7
          this[key] = Template7.compile(template);

        }

        return this[key];

      }
    };

    STX.Studies.studyDialogMod = function(stx, study, div, override) {

      var sd = STX.Studies.studyLibrary[study];

      if (!sd) sd = {};
      if (typeof(sd.inputs) == "undefined") sd.inputs={"Period":14};
      if (typeof(sd.outputs) == "undefined") sd.outputs={"Result":"auto"};


      var compiledTemplate;

      _.each(sd.inputs, function(value, name) {

        // COMPILED TEMPLATES MUST BE CACHED BECAUSE OF POOR PERFORMANCE!!!!!!

        if (_.isNumber(value)) {

          // Slider
          compiledTemplate = compiledTemplates.get('input-slider');

          var context = {
              name: name,
              value: value
          };

          var html = compiledTemplate(context);

          $('#testing-indicators').append(html);

        }

        if (_.isString(value)) {

          if (_.indexOf(toSelect, value) >= 0) {
            // Smart-select

            var options = [{
              value: 'simple',
              text: 'Simple'
            }, {
              value: 'exponential',
              text: 'Exponential'
            }, {
              value: 'time series',
              text: 'Time Series'
            },  {
              value: 'triangular',
              text: 'Triangular'
            },  {
              value: 'variable',
              text: 'Variable'
            },  {
              value: 'vidya',
              text: 'VIDYA'
            },  {
              value: 'weighted',
              text: 'Weighted'
            },  {
              value: 'welles wilder',
              text: 'Welles Wilder'
            }];

            compiledTemplate = compiledTemplates.get('smart-select');

            console.log(name, value);
            var context = {
              name: name,
              value: value,
              options: options
            };

            var html = compiledTemplate(context);
            $('#testing-indicators').append(html);

          }

          if (value === 'field') {

            // Smart-select

            var options = [];
            var chart = self.stxx.chart;
            var count = 0;

            for(var field in chart.dataSet[chart.dataSet.length-1]) {
              if(["Open","High","Low","Close","Adj_Close","hl/2","hlc/3","hlcc/4", "ohlc/4"].indexOf(field) == -1){
                if(STX.Studies.actualOutputs.indexOf(field)==-1) continue;
                var found=false;
                if(override && override.sd) {
                  for(var p in override.sd.outputs){
                    if ( field == p + " " + override.sd.name ) found=true;
                  }
                }
                // can't modify study basing it on it's own output data, wich is changing due to the same modify (infinite loop)
                if (found) continue;
              }
              // addOption(field, field, formField);
              options.push({value: field, text: field});
              // if(field=="Close") formField.selectedIndex=count;
              count++;
            }

            compiledTemplate = compiledTemplates.get('smart-select');

            var context = {
              name: name,
              value: value,
              options: options
            };

            var html = compiledTemplate(context);
            $('#testing-indicators').append(html);

          }

        }

      });

    };

    STX.Studies.studyDialog(self.stxx, 'Bollinger Bands', $$('studyDialog'), {});
    STX.DialogManager.displayDialog('studyDialog');

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
