angular.module('app')
.config(function($stateProvider){

var productState = {
	name:'products',
	url:'/products',
	component:'products'
	};
	
	var bookInfoState = {
		name:'bookInfo',
		url:'/products/:id',
		component:'bookInfo'
	};
	
	
	var cartState = {
		name:'bag',
		url:'/bag',
		component:'bag'
	};
	
	var checkoutState = {
		name:'checkout',
		url:'/checkout',
		component:'checkout'
	};
$stateProvider.state(productState);
$stateProvider.state(bookInfoState);
$stateProvider.state(cartState);
$stateProvider.state(checkoutState);
});