function productController($scope,shopinGcart){
    $scope.getItems = function(){
        return shopinGcart.getItems();
    }
    $scope.addToBag = function(id){
        return shopinGcart.addToBag(id);
    }
}