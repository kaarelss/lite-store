'use strict';
 
angular.module('liteStore', [
    'ngRoute',
    'cart',
    'checkout'
]).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);