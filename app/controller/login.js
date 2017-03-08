'use strict';

angular.module('userApp.login', ['ngRoute'])
    .controller('LoginCtrl', function ($scope, $location, localStorageService, check_login_service, rest_login) {
        check_login_service.checkIfLoggedIn($location, localStorageService);
        $scope.login = function () {
            rest_login.login({}, {
                email: $scope.email,
                password: $scope.password
            }).$promise.then(function success(response) {
                localStorageService.set('token_key', response.key);
                localStorageService.set('user_id', response.user);
                $location.url('/userDetail');
            }, function error(response) {
                $scope.loginError = response.detail;
            });
        };
    });