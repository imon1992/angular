angular.module('app')
.factory('shopingCart', function($http){
	var items;
	var books = [];
	if(localStorage['bag'] != undefined){
		items = JSON.parse(localStorage['bag']);
	}else{
		items = {};
	}
	$http.get('data/books.json', { cache: true }).then(function(resp) {
		books =  resp.data;
	  });
	return {
		getItems: function(){
			// if(localStorage['bag'] != undefined){
			// 	itemss = localStorage['bag'];
			// }else{
			// 	items = {};
			// }
			return items;
		},
		getItemsCount: function(){
			var i =0;
			for(var key in items){
				i++
			}
			return i;
		},
		clearItems: function(){
			localStorage.clear();
			items = {};
			
		},
		getAllBooks: function(){
			return books;
		},
		getProductById: function(id){
			var obj;

			for(product in books){
				if(books[product].id == id){
					obj = books[product];
				}
			}
			return obj
		},
		addToCart: function(id){
			var bag = {};
			for(obj in books){
				if(books[obj].id == id){
					if(localStorage['bag'] != undefined){
						bag = JSON.parse(localStorage['bag']);
						bag[id-1] = books[id-1];
						localStorage['bag'] = JSON.stringify(bag)
						localStorage['bag']
					}else{
						bag[id-1] = books[id-1]
						localStorage['bag'] = JSON.stringify(bag)
					}	
				}
			}
			items = bag;
			
		}
	};
})