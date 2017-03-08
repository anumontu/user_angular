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

    $routeProvider.otherwise({redirectTo: '/home'});
}]);
