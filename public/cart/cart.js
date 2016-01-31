'use strict';
 
angular.module('cart', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

// Karels
 
.controller('CartCtrl', [function() {
     
}]);