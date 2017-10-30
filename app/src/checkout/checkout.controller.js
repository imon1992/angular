function checkoutController($scope,shopingCart,$stateParams){
	$scope.submit = function(){
		$scope.submitted = true;
		//send data to server or somewhere else
		shopingCart.clearItems();
		alert('Thank you for your purchase');
	  }

}