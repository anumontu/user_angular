'use strict';

angular.module('userApp.register', ['ngRoute'])
    .controller('RegisterCtrl', function ($scope, $location, rest_user) {
        $scope.register = function () {
            if ($scope.password != $scope.confirm_password) {
                alert("Passwords do not match");
            } else {
                rest_user.user().add_user({}, {
                    email: $scope.email,
                    password: $scope.password,
                    first_name: $scope.first_name,
                    last_name: $scope.last_name,
                    age: $scope.age
                }).$promise.then(function success() {
                    alert("Registered Successfully, Please login to continue");
                    $location.url("/login");
                }, function error(response) {
                    alert(response.data);
                });
            }
        };
    });