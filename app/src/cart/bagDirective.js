angular.module('app')
.directive('bagDirective',function(){
	return {
		template: '<p ng-repeat="obj in items track by $index"><span>Book name:{{obj.name}}</span><span>Book Price{{obj.price}}</span></p>',
		controller: function($scope, shopingCart){
			$scope.items = shopingCart.getItems();
			console.log($scope.items);
		}
	};
});