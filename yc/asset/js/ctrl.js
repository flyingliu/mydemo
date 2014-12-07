'use strict';
var ycControllers = angular.module('ycControllers', []);

var data = {};
var host = location.host;

if(host.indexOf('yctravel.gov.cn')>-1){
  data = {
    "jingqu":"http://www.yctravel.gov.cn/xml/jqrss.xml",
    "line":"http://www.yctravel.gov.cn/xml/xlrss.xml",
    "hotel":"http://www.yctravel.gov.cn/xml/jdrss.xml",
    "huodong":"http://www.yctravel.gov.cn/xml/hdrss.xml",
    "tc":"http://www.yctravel.gov.cn/xml/tcrss.xml",
    "ms":"http://www.yctravel.gov.cn/xml/msrss.xml",
    "xxyl":"http://www.yctravel.gov.cn/xml/xxylrss.xml",
    "know":"http://www.yctravel.gov.cn/xml/knowxml.xml"
  }
} else {
  data = {
    "jingqu":"./data/jqrss.xml",
    "line":"./data/xlrss.xml",
    "hotel":"./data/jdrss.xml",
    "huodong":"./data/hdrss.xml",
    "tc":"./data/tcrss.xml",
    "ms":"./data/msrss.xml",
    "xxyl":"./data/xxylrss.xml",
    "know":"./data/knowxml.xml"
  }  
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
    $http.get(data.tc,{cache: true}).success(function(data) { 
      var tcs = createXml(data);
      $scope.tcs = $.xml2json(tcs).item;  
      store.set('tcs', $scope.tcs);                  
    }); 
    $http.get(data.ms,{cache: true}).success(function(data) { 
      var mss = createXml(data);
      $scope.mss = $.xml2json(mss).item;  
      store.set('mss', $scope.mss);              
    });  
    $http.get(data.know,{cache: true}).success(function(data) { 
      var knows = createXml(data);
      $scope.knows = $.xml2json(knows).channel.item;  
      store.set('knows', $scope.knows);          
    });
    $http.get(data.xxyl,{cache: true}).success(function(data) { 
      var xxyls = createXml(data);
      $scope.xxyls = $.xml2json(xxyls).item;  
      store.set('xxyls', $scope.xxyls);         
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
    $scope.tcs = store.get('tcs');
    $scope.mss = store.get('mss');
    $scope.xxyls = store.get('xxyls');
    $scope.knows = store.get('knows');

    $scope.istype = function(obj){
      if($scope.type == obj){
        return true;
      } else {
        return false;        
      }
    }


    if($scope.itemId) {
      $scope.title = "内容";
    } else if($scope.type) {
      $scope.title = "列表";      
    } else {
      $scope.title = "搜索";        
    }

    if(!($scope.sites || $scope.hotels || $scope.lines || $scope.huodongs || $scope.tcs || $scope.mss || $scope.xxyls || $scope.knows)){
      location.href = "#/"
    }


    anchor('body',100)
  }]);


ycControllers.controller('helpCtrl', ['$scope', '$http',
  function($scope, $http) {
    $scope.title = '帮助中心';
  }]);



