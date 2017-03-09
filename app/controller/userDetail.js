'use strict';

angular.module('userApp.userDetail', ['ngRoute'])
    .controller('userDetailCtrl', function ($scope, rest_angular, $location, localStorageService) {
        var token_key = localStorageService.get('token_key');
        var loggedin_user_id = localStorageService.get('user_id');
        if (token_key == null && loggedin_user_id == null) {
            $location.url("/home");
        } else {
            rest_angular.get_user(token_key, loggedin_user_id)
                .then(function success(response) {
                    $scope.user = response;
                    $scope.edit_user = response;
                }, function error(response) {
                    var data = angular.fromJson(response.data);
                    alert(data.detail);
                });
        }
        $scope.edit = function () {
            $scope.disabled = false;
        };
        $scope.cancel = function () {
            $scope.disabled = true;
        };
        $scope.save = function () {
            rest_angular.update_user(token_key, loggedin_user_id, $scope.edit_user)
                .then(function success() {
                    alert("Updated Successfully");
                    $scope.disabled = true;
                }, function error(response) {
                    var data = angular.fromJson(response.data);
                    alert(data.detail);
                });
        };
        $scope.logout = function () {
            rest_angular.logout(token_key)
                .then(function success() {
                    localStorageService.remove('token_key');
                    localStorageService.remove('user_id');
                    $location.url('/login');
                }, function error(response) {
                    var data = angular.fromJson(response.data);
                    alert(data.detail);
                })
        };
    });