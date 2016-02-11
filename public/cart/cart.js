'use strict';
 
angular.module('cart', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])

// Karels
 
.controller('CartCtrl', ['$scope', function($scope) {

    $scope.shopData = [
          {'item': 'Hard Disk','id': 'HD','selected': 0,'prices': [{'size': '200GB','price': '30.00'}, {'size': '400GB','price': '60.00'}]}, 
          {'item': 'CPU','id': 'CPU','selected': 0,'prices': [{'size': 'i3','price': '80.00'}, {'size': 'i5','price': '110.00'}]}, 
          {'item': 'Monitor','id': 'MON','selected': 0,'prices': [{'size': '16\'','price': '125.00'}, {'size': '19\'','price': '150.00'}]},
          {'item': 'Optical Mouse','id': 'MOU','selected': 0,'prices': [{'size': 'Optical','price': '6.00'}, {'size': 'Advanced','price': '8.00'}]},
          {'item': 'RAM','id': 'RM','selected': 0,'prices': [{'size': '4GB','price': '20.00'}, {'size': '8GB','price': '40.00'}]},
          {'item': 'USB Keyboard','id': 'KEY','selected': 0,'prices': [{'size': 'Standard','price': '10.00'}, {'size': 'Advanced','price': '15.00'}]}
    ];

    $scope.total = function() {
      var t = 0;

      for (var k in $scope.shopData) {
        t += parseInt($scope.shopData[k].selected);
      }

      return t;

    }

}])

.directive('checkList', function() {
  return {
    restrict: 'E',
    scope: {
      option: '=',
      name: '=',
      selected: '=selected'
    },
    template: function(elem, attrs) {
      return '<div class="panel-body">\
                    <div class="radio" ng-repeat="i in option">\
                        <label><input type="radio" ng-model="$parent.selected" ng-value="{{i.price}}" name="{{name}}">{{i.size}} EUR {{i.price}}</label>\
                    </div>\
                </div>'
    }
  };
})

.directive('getScroll', function($window) {
  return {
    scope: {
      scroll: '=scroll'
    },
    link: function(scope, element, attrs) {

      var scrollwindow = angular.element($window);
     
      scrollwindow.on('scroll', scope.$apply.bind(scope, function(){scope.scroll = scrollwindow.scrollTop();}));
      
    }
  };
});
