'use strict';

angular.module('userApp.userDetail', ['ngRoute'])
    .controller('userDetailCtrl', function ($scope, rest_user, rest_logout, $location, localStorageService) {
        var token_key = localStorageService.get('token_key');
        var loggedin_user_id = localStorageService.get('user_id');
        if (token_key == null && loggedin_user_id == null) {
            $location.url("/home");
        } else {
            rest_user.user(token_key).get_user({user_id: loggedin_user_id})
                .$promise.then(function success(response) {
                $scope.user_id = response.id;
                $scope.edit_email = $scope.user_email = response.email;
                $scope.edit_first_name = $scope.user_first_name = response.first_name;
                $scope.edit_last_name = $scope.user_last_name = response.last_name;
                $scope.edit_age = $scope.user_age = response.age;
                $scope.edit_password = '';
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
            rest_user.user(token_key).update_user({user_id: loggedin_user_id}, {
                email: $scope.edit_email,
                password: $scope.edit_password,
                first_name: $scope.edit_first_name,
                last_name: $scope.edit_last_name,
                age: $scope.edit_age
            }).$promise.then(function success() {
                alert("Updated Successfully");
                $scope.disabled = true;
            }, function error(response) {
                var data = angular.fromJson(response.data);
                alert(data.detail);
            })
        };
        $scope.logout = function () {
            rest_logout.user(token_key).logout().$promise.then(function success() {
                localStorageService.remove('token_key');
                localStorageService.remove('user_id');
                $location.url('/login');
            }, function error(response) {
                var data = angular.fromJson(response.data);
                alert(data.detail);
            })
        };
    });