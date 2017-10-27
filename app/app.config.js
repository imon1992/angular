var myApp = angular.module('app').config(function($stateProvider) {
  var productState = {
    name: 'products',
    url: '/products',
    component: 'products'
  }

  $stateProvider.state(productState);
});