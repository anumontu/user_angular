'use strict';

angular.module('userApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $location) {
    $scope.loginPage = function () {
        $location.url('/login');
    };

    $scope.registerPage = function () {
        $location.url('/register');
    };
});