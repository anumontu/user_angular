'use strict';

// Declare app level module which depends on views, and components
var userApp = angular.module('userApp', [
    'LocalStorageModule',
    'ngRoute',
    'restangular',
    'userApp.login',
    'userApp.home',
    'userApp.userDetail',
    'userApp.register',
    'userApp.version'
]).config( function ($locationProvider, $routeProvider, RestangularProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
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
        .otherwise({redirectTo: '/'});

    RestangularProvider.setBaseUrl('http://localhost:8000/api/').setRequestSuffix("/");
});
