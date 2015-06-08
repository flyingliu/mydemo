'use strict';

/* Services */

var datas = angular.module('datas', ['ngResource']);

datas.factory('Idata', 
  function($resource){
    return {
      datatypes : $resource("./json/sight_types.json")
    }
  });
