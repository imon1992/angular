angular.module("app",[]);//sozdali novii modul
angular.module("app").controller('SettingsController1', SettingsController1);
angular.module("app").controller('SettingsController2', SettingsController2);
function SettingsController1($scope) { //srv modul ili server kotorii uje est
    $scope.name = 'Vsya';
    this.name = 'JOhn Smith';
}
function SettingsController2($scope) { //srv modul ili server kotorii uje est
    var self = this;
    this.names = [];
    $scope.names = []
    this.addName = function(fname){
        self.names.push(fname);
        $scope.names.push(fname);
    }

    this.deleteName = function(id){
        self.names.splice(id,1);
    }

    this.friends=[
        {name: 'John',   phone: '555-1212',  age: 10},
        {name: 'Mary',   phone: '555-9876',  age: 19},
        {name: 'Mike',   phone: '555-4321',  age: 21},
        {name: 'Adam',   phone: '555-5678',  age: 35},
        {name: 'Julie',  phone: '555-8765',  age: 29}
      ];

      this.list=['Hell','world','angular','vue','php'];
}