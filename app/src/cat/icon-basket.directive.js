angular.module('app')
.directive('iconBasket', function(){
    return {
        template: 'Items: {{itemsCount}}',
        controller: function ($scope,shopinGcart){
                $scope.itemsCount = shopinGcart.getItemsCount()
            }
    }
});