'use strict';

angular.module('userApp.login', ['ngRoute'])
    .controller('LoginCtrl', function ($scope, $http, $location, localStorageService, check_login_service) {
        check_login_service.checkLogin($location, localStorageService);
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