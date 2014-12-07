var app = angular.module('ycFilters',[]);

app.filter('br',function() {
  return function(input) {
    return input?input:'暂无内容';
  }
});

app.filter('useHTML', ['$sce', function ($sce) { 
  return function (text) {
    return $sce.trustAsHtml(text); 
  }; 
}]);


