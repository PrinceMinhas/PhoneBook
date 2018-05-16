'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.names = [];
  $scope.addContact = function() {
    $('#sAlert')[0].style.display = "block";
    $('#sAlert').delay(5000).fadeOut(2000);
    $scope.names.push({name:$scope.fullName, number:$scope.phoneNumber});
  };
  $scope.currentPage = 0;
  $scope.pageSize = 10;
  $scope.numberOfPages=function(){
    if (Math.ceil($scope.names.length/$scope.pageSize) == 0) {
      return 1;
    }
    else {
      return Math.ceil($scope.names.length/$scope.pageSize);
    }                
  }
}])

.filter('startFrom', function() {
  return function(input, start) {
      start = +start; //parse to int
      return input.slice(start);
  }
});