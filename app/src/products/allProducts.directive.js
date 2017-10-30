angular.module('app')
.directive('allProducts',function(){
	return {
		templateUrl: './src/products/allBooks.html',
		controller: function($scope, shopingCart){
			$scope.product = shopingCart.getAllBooks();
		}
	};
});