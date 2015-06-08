'use strict';

/* Controllers */

var touchControllers = angular.module('touchControllers', []);
var rightNum = 2;


var os = function() {
  var ua = navigator.userAgent,
    isQB = /(?:MQQBrowser|QQ)/.test(ua),
    isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isIpad = /(?:iPad|PlayBook)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua)||(isFireFox && /(?:Tablet)/.test(ua)),
    isSafari = /(?:Safari)/.test(ua),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isOpen= /(?:Opera Mini)/.test(ua),
    isUC = /(?:UCWEB|UCBrowser)/.test(ua),
    isPc = !isPhone && !isAndroid && !isSymbian;
  return {
    isQB: isQB,
    isTablet: isTablet,
    isPhone: isPhone,
    isAndroid : isAndroid,
    isPc : isPc,
    isOpen : isOpen,
    isUC: isUC,
    isIpad : isIpad
  };
}();
function isWeiXin(){
    var ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

function checkOs() {
  if(os.isPhone || os.isIpad){
    if(isWeiXin()){
      $(".android-down").fadeIn(10).find("img").attr("src","/images/ios.png");
      return false;
    }
  } else if (os.isAndroid) {
    if(isWeiXin()){
      $(".android-down").fadeIn(10).find("img").attr("src","/images/an.png");
      return false;
    }
  }
  location.href = 'https://itunes.apple.com/us/app/id965759688';
}

function share() {
  if(os.isPhone || os.isIpad){
    $(".android-down").fadeIn(10).find("img").attr("src","/images/ios.png");
    return false;
  } else {
    $(".android-down").fadeIn(10).find("img").attr("src","/images/an.png");
    return false;
  }
}



touchControllers.controller('testCtrl', ['$scope',
function($scope) {
  var right = ['q1c','q2c','q3b','q4a','q5c','q6c','q7c','q8c'];
  var index = 0;
  var shadom = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8]);
  $(".q"+shadom[index]).addClass('active');
  $scope.daan = [];
  $scope.select = function(e){
    var value =  $(e.target).data('value');
    $scope.daan.push(value);
    $(e.target).addClass('active');
    $(".overlay").show();
    _.delay(function() {

      if (index>1) {
        rightNum = _.intersection(right, $scope.daan).length;
        console.log('测试完毕，您答对了'+rightNum+'题！');
        location.href = '#/view';
        return false;
      }
      $(".q"+shadom[index]).hide(1000);
      index++;
      $(".overlay").hide();
      $(".q"+shadom[index]).show(1000);
    }, 1000);
  }
}]);

//页面切换控制器
touchControllers.controller('mainCtrl', ['$scope', '$location', 'mePageLoading','$timeout',
  function($scope, $location, mePageLoading,$timeout) {
    $scope.effect = 'Spill';
    $scope.show = function() {
      // 手动调用动画
      mePageLoading.show($scope.effect);
      $timeout(function() {
        mePageLoading.hide();
      }, 1000);
    };
  }
])

//全景显示页面

touchControllers.controller('viewCtrl', ['$scope','$interval',
function($scope, $interval) {
  $scope.rightNum = rightNum == 0 ? 1 : rightNum;
  $scope.time = $scope.rightNum * 5 + 5;
  var flag = true;
  $scope.start = function(){
    if (flag) {
      flag = false;
      $(".info").hide(100);
      var timer = $interval(function(){
        if ($scope.time>0) {
          $scope.time--;
        } else {
          $interval.cancel(timer);
          $('.over').show(100);
          flag = true;
        }
      },1000,1000,true)
    }
  };

  $scope.down = checkOs;

  $scope.share = share;

  $scope.hide = function(e){
    $(e.target).hide();
  };

  $scope.timeover = function(){
    $('.over').hide();
    $('.endinfo').show();

  }

}]);


