'use strict';

angular.module('userApp.register', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        });
    }])

    .controller('RegisterCtrl', function ($scope, $http, $location) {
        $scope.register = function () {
            if ($scope.password != $scope.confirm_password) {
                alert("Passwords do not match");
            } else {
                $http.post('http://localhost:8000/api/user/', {
                    email: $scope.email,
                    password: $scope.password,
                    first_name: $scope.first_name,
                    last_name: $scope.last_name,
                    age: $scope.age
                }).then(function success() {
                    alert("Registered Successfully, Please login to continue");
                    $location.url("/login");
                }, function error(response) {
                    alert(response.data);
                });
            }
        };
    });