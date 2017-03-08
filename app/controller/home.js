'use strict';

angular.module('userApp.home', ['ngRoute'])
    .controller('HomeCtrl', function ($scope, $location, localStorageService, check_login_service) {
        check_login_service.checkIfLoggedIn($location, localStorageService);
        $scope.loginPage = function () {
            $location.url('/login');
        };

        $scope.registerPage = function () {
            $location.url('/register');
        };
    });