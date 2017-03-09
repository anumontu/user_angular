'use strict';

angular.module('userApp.login', ['ngRoute'])
    .controller('LoginCtrl', function ($scope, $location, localStorageService, check_login_service, rest_angular) {
        check_login_service.checkIfLoggedIn($location, localStorageService);
        $scope.login = function () {
            rest_angular.login($scope.email, $scope.password)
                .then(function success(response) {
                    localStorageService.set('token_key', response.key);
                    localStorageService.set('user_id', response.user);
                    $location.url('/userDetail');
                }, function error(response) {
                    var data = angular.fromJson(response.data);
                    $scope.loginError = data.detail;
                });
        };
    });