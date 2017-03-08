'use strict';

// Declare app level module which depends on views, and components
var userApp = angular.module('userApp', [
    'LocalStorageModule',
    'ngRoute',
    'userApp.login',
    'userApp.home',
    'userApp.userDetail',
    'userApp.register',
    'userApp.version'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/userDetail', {
            templateUrl: 'views/userDetail.html',
            controller: 'userDetailCtrl'
        })
        .otherwise({redirectTo: '/home'});
}]);
