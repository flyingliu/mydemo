'use strict';
var ycControllers = angular.module('ycControllers', []);

// var data = {
//   "jingqu":"http://www.yctravel.gov.cn/xml/jqrss.xml",
//   "line":"http://www.yctravel.gov.cn/xml/xlrss.xml",
//   "hotel":"http://www.yctravel.gov.cn/xml/jdrss.xml",
//   "huodong":"http://www.yctravel.gov.cn/xml/hdrss.xml"
// }

var data = {
  "jingqu":"./data/jqrss.xml",
  "line":"./data/xlrss.xml",
  "hotel":"./data/jdrss.xml",
  "huodong":"./data/hdrss.xml"
}

function createXml(str){
  if(document.all){
    var xmlDom=new ActiveXObject("Microsoft.XMLDOM");
    xmlDom.loadXML(str);
　　return xmlDom;
  }
  else {
　　return new DOMParser().parseFromString(str, "text/xml");
  }
}

function anchor(_endElem, _speed) {
  $('html,body').animate({
    scrollTop: $(_endElem).offset().top
  }, _speed);
};


ycControllers.controller('HomeCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get(data.jingqu,{cache: true}).success(function(data) { 
      var sites = createXml(data);
      $scope.sites = $.xml2json(sites).item;
      $scope.indexsites = $scope.sites.slice(0, 3);
      store.set('sites', $scope.sites);
    }); 
    $http.get(data.hotel,{cache: true}).success(function(data) { 
      var hotels = createXml(data);
      $scope.hotels = $.xml2json(hotels).item;
      $scope.indexhotels = $scope.hotels.slice(0, 3);      
      store.set('hotels', $scope.hotels);      
    }); 
    $http.get(data.line,{cache: true}).success(function(data) { 
      var lines = createXml(data);
      $scope.lines = $.xml2json(lines).item;
      $scope.indexlines = $scope.lines.slice(0, 3);
      store.set('lines', $scope.lines);              
    });
    $http.get(data.huodong,{cache: true}).success(function(data) { 
      var huodongs = createXml(data);
      $scope.huodongs = $.xml2json(huodongs).item;
      $scope.indexhuodongs = $scope.huodongs.slice(0, 3);      
      store.set('huodongs', $scope.huodongs);              
    }); 

    $('.carousel').carousel({
      interval: 5000
    })

  }]);


ycControllers.controller('show', ['$scope', '$http','$routeParams',
  function($scope, $http,$routeParams) {
    $scope.itemId = $routeParams.itemId;
    $scope.type = $routeParams.type;

    $scope.sites = store.get('sites');
    $scope.hotels = store.get('hotels');
    $scope.lines = store.get('lines');
    $scope.huodongs = store.get('huodongs');


    $scope.istype = function(obj){
      if($scope.type == obj){
        return true;
      } else {
        return false;        
      }
    }


    if($scope.itemId) {
      $scope.title = "内容";
    } else {
      $scope.title = "列表";      
    }    

    anchor('body',100)
  }]);


ycControllers.controller('helpCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.title = '帮助中心';
  }]);



