var app = angular.module('app', [])

app.controller('userController', function (nameStorage) {
    this.addNames = function(name){
        nameStorage.setName(name);
    }
})
    .service('nameStorage', function () {
    var names = [];
    return {
        setName: function (name) {
            names.push(name);
        },
        getName: function () {
            return names;
        }
    }
});

app.controller('getNames',function(nameStorage){
    this.names= nameStorage.getName();
})