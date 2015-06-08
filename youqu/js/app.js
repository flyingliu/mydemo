'use strict';

/* App Module */

var touchApp = angular.module('touchApp', [
  'ui.router',
  'me-pageloading',
  'ngAnimate',
  'touchControllers'
]);

touchApp.run(
  ['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
      $rootScope.$stateParams = $stateParams;
    }
  ]
)

touchApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .otherwise('/');

    $stateProvider.state("home", {
      url: "/",
      templateUrl: '/mydemo/youqu/home.html',
      resolve: {
        data: ['$q',
          function($q) {
            var defer = $q.defer();
            setTimeout(function() {
              defer.resolve('home');
            }, 1000);
            return defer.promise;
          }
        ]
      }
    });

    $stateProvider.state("flyleaf", {
      url: "/flyleaf",
      templateUrl: '/mydemo/youqu/flyleaf.html',
      resolve: {
        data: ['$q',
          function($q) {
            var defer = $q.defer();
            setTimeout(function() {
              defer.resolve('flyleaf');
            }, 1000);
            return defer.promise;
          }
        ]
      }
    });

    $stateProvider.state("test", {
      url: "/test",
      templateUrl: '/mydemo/youqu/test.html',
      controller: 'testCtrl',
      resolve: {
        data: ['$q',
          function($q) {
            var defer = $q.defer();
            setTimeout(function() {
              defer.resolve('test');
            }, 1000);
            return defer.promise;
          }
        ]
      }
    });

    $stateProvider.state("view", {
      url: "/view",
      templateUrl: '/mydemo/youqu/view.html',
      controller: 'viewCtrl',
      resolve: {
        data: ['$q',
          function($q) {
            var defer = $q.defer();
            setTimeout(function() {
              defer.resolve('test');
            }, 1000);
            return defer.promise;
          }
        ]
      }
    });
  }
]);