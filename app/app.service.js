angular.module('app')
.factory('shopinGcart',function($http){
    // var items = [{'name':'book 1','id':1,'desc':'book 1 desc'},{'name':'book 2','id':2,'desc':'book 2 desc'}];
    var items  = [];
    $http.get('src/data/books.json', { cache: true }).then(function(resp) {
      items =  resp.data;
    });
    return {
        getItems: function() {
            return items;
          },
        // getItems: function(){
        //     console.log(JSON.stringify(items));
        //     return items;
        // },
        getItemsCount: function(){
            // return items.length;
        },
        addToBag: function(id){
            var bag = {};
            if(localStorage['bag'] != undefined){
                bag = JSON.parse(localStorage['bag']);
                bag[id-1] = items[id-1];
                localStorage['bag'] = JSON.stringify(bag)
                localStorage['bag']
            }else{
                bag[id-1] = items[id-1]
                localStorage['bag'] = JSON.stringify(bag)
            }
        }
    }
})