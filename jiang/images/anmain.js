(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


var app = angular.module('app', []);
var flag = true;

app.controller('homeCtrl', function($scope,$timeout) {
  $scope.aWin = {};

  $scope.formData = {
    "name": "一等奖",
    "totel": 5,
    "minNum": 1,
    "maxNum": 200,
    "include": true
  };

  $scope.createArr = function() {
    if(!$scope.aWin[$scope.formData.name]){
      $scope.aWin[$scope.formData.name] = [];
      $scope.curList = [];
    } else {
      $scope.curList = $scope.aWin[$scope.formData.name];
    }
  };

  $scope.createArr();

  $scope.start = function() {

    $('.control').addClass('go');

    if (flag) {
      flag = false;
      var fd = $scope.formData;
      var name = fd.name;
      var aPs = [];

      for (var i = fd.minNum; i <= fd.maxNum; i++) {
        if (i < 10) {
          i = "00" + i;
        } else if (i < 100) {
          i = '0' + i;
        } else {
          i = i.toString();
        }
        aPs.push(i);
      }

      var aWinAll = [];
      _.each($scope.aWin, function(arr) {
        aWinAll = _.union(aWinAll, arr);
      });

      var aNewPs = [];
      if (fd.include) {
        aNewPs = _.difference(aPs, aWinAll);
      } else {
        aNewPs = aPs;
      }

      var curWinId = _.sample(aNewPs);

      $scope.anima(curWinId, name);

      $timeout( function(){
        $scope.aWin[name].push(curWinId);
        $scope.curList = $scope.aWin[name];
        flag = true;
        $('.control').removeClass('go');
      },16000,true);
    }
  };


  $(document).keypress(function (e) {
    if (e.keyCode == 32){
      $scope.start();
      return false;
    }
  })

  $scope.anima = function(winid) {
    var s1 = winid.substr(0, 1);
    var s2 = winid.substr(1, 1);
    var s3 = winid.substr(2, 1);
    var i = 100;
    var j = i * 2-1;
    var k = i * 3-2;
    var timer1 = setInterval(function() {
      if (i > 0) {
        $('.num1').text(i % 10);
        i--;
      } else {
        $('.num1').text(s1);
        clearInterval(timer1);
      }
    }, 50);

    var timer2 = setInterval(function() {
      if (j > 0) {
        $('.num2').text(j % 10);
        j--;
      } else {
        $('.num2').text(s2);
        clearInterval(timer2);
      }
    }, 50);

    var timer3 = setInterval(function() {
      if (k > 0) {
        $('.num3').text(k % 10);
        k--;
      } else {
        $('.num3').text(s3);
        clearInterval(timer3);
      }
    }, 50);
  };
});



$(function() {

  var winH = $(window).height();
  $('.s1').height(winH);

  $(window).resize(function() {
    var winH = $(window).height();
    $('.s1').height(winH);
  });

  $('.setcon').click(function() {
    $('html body').animate({
      scrollTop: '0px'
    }, 100);
    console.log($('.s1').scrollTop());
  });

});

