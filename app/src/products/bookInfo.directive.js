angular.module('app')
.directive('bookInfoDirective',function(){
	return {
		template: '<p>id:{{id}}</p><p>name:{{name}}</p><p>desc:{{desc}}</p>price:{{price}}</p>',
		scope:{
			productId:'='
		},
		controller: function($scope,shopingCart){
			var obj = shopingCart.getProductById($scope.productId)
			$scope.name = obj.name;
			$scope.id = obj.id;
			$scope.desc = obj.desc;	
			$scope.price = obj.price;	
		}
	};
});