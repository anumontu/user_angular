'use strict';

angular.module('userApp.userDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/userDetail', {
    templateUrl: 'views/userDetail.html',
    controller: 'userDetailCtrl'
  });
}])

.controller('userDetailCtrl', function($scope, $http, $location, localStorageService) {
    var token_key = localStorageService.get('token_key');
    var loggedin_user_id = localStorageService.get('user_id');
    if (token_key == null && loggedin_user_id == null) {
        $location.url("/home");
    } else {
        $http.get('http://localhost:8000/api/user/' + loggedin_user_id + '/', {
            headers: {
                'Authorization': 'Token ' + token_key
            }
        }).then(function success(response) {
            var data = angular.fromJson(response.data);
            $scope.user_id = data.id;
            $scope.edit_email = $scope.user_email = data.email;
            $scope.edit_first_name = $scope.user_first_name = data.first_name;
            $scope.edit_last_name = $scope.user_last_name = data.last_name;
            $scope.edit_age = $scope.user_age = data.age;
            $scope.edit_password = '';
        }, function error(response) {
            alert(response.statusText);
        });
    }
    $scope.edit = function () {
        $scope.disabled = false;
    };
    $scope.cancel = function () {
        $scope.disabled = true;
    };
    $scope.save = function () {
        $http.put('http://localhost:8000/api/user/' + loggedin_user_id + '/', {
            email: $scope.edit_email,
            password: $scope.edit_password,
            first_name: $scope.edit_first_name,
            last_name: $scope.edit_last_name,
            age: $scope.edit_age
        }, {
            headers: {
                'Authorization': 'Token ' + token_key
            }
        }).then(function success() {
            alert("Updated Successfully");
            $scope.disabled = true;
        }, function error(response) {
            var error = angular.fromJson(response.data);
            alert(error.detail);
        })
    };
    $scope.logout = function () {
        $http.get('http://localhost:8000/api/logout/', {
            headers: {
                'Authorization': 'Token ' + token_key
            }
        }).then(function success() {
            $location.url('/login');
        }, function error(response) {
            var error = angular.fromJson(response.data);
            alert(error.detail);
        })
    };
});