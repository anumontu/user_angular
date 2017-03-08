'use strict';

angular.module('userApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function($scope, $location, localStorageService) {
    var token_key = localStorageService.get('token_key');
    var loggedin_user_id = localStorageService.get('user_id');
    if (token_key != null && loggedin_user_id != null) {
        $location.url("/userDetail");
    }
    $scope.loginPage = function () {
        $location.url('/login');
    };

    $scope.registerPage = function () {
        $location.url('/register');
    };
});