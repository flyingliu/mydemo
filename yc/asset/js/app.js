'use strict';

/* App Module */

var app = angular.module('app', [
  'ngRoute',
  'ycFilters',
  'ycControllers'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeCtrl'
      }).  
      when('/help', {
        templateUrl: 'view/help.html',
        controller: 'helpCtrl'
      }).  
      when('/search', {
        templateUrl: 'view/search.html',
        controller: 'show'
      }). 
      when('/search/:type/:itemId', {
        templateUrl: 'view/show.html',
        controller: 'show'
      }).  
      when('/search/:type', {
        templateUrl: 'view/list.html',
        controller: 'show'
      }).  
      otherwise({
        redirectTo: '/'
      });
  }]);
