'use strict';

angular.module('userApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'views/login.html',
    controller: 'LoginCtrl'
  });
}])

.controller('LoginCtrl', function($scope, $http, $location, localStorageService) {
    var token_key = localStorageService.get('token_key');
    var loggedin_user_id = localStorageService.get('user_id');
    if (token_key != null && loggedin_user_id != null) {
        $location.url("/userDetail");
    }
    $scope.login = function () {
        $http.post('http://localhost:8000/api/login/', {
            email: $scope.email,
            password: $scope.password
        }).then(function success(response) {
            var data = angular.fromJson(response.data);
            localStorageService.set('token_key', data.key);
            localStorageService.set('user_id', data.user);
            $location.url('/userDetail');
        }, function error(response) {
            var data = angular.fromJson(response.data);
            $scope.loginError = data.detail;
        });
    };
});