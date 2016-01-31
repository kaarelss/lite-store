'use strict';
 
angular.module('liteStore', [
    'ngRoute',
    'cart'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);