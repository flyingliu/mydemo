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
      templateUrl: '../home.html',
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
      templateUrl: '../flyleaf.html',
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
      templateUrl: '../test.html',
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
      templateUrl: '../view.html',
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

$(function() {
  var music = new Audio("../images/bgm.mp3");
  music.loop = true;

  function mopen() {
    music.play();
    $(".sd").removeClass("off").addClass("on");
  }

  function mpause() {
    music.pause();
    $(".sd").removeClass("on").addClass("off");
  }
  $(".sd").click(function() {
    $(this).hasClass("on") ? mpause() : mopen();;
  });
  mopen();
});
