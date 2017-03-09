'use strict';

angular.module('userApp.register', ['ngRoute'])
    .controller('RegisterCtrl', function ($scope, $location, rest_angular) {
        $scope.register = function () {
            if ($scope.user.password != $scope.confirm_password) {
                alert("Passwords do not match");
            } else {
                rest_angular.add_user($scope.user)
                    .then(function success() {
                    alert("Registered Successfully, Please login to continue");
                    $location.url("/login");
                }, function error(response) {
                    var data = angular.fromJson(response.data);
                    alert(data.detail);
                });
            }
        };
    });