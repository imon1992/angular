angular.module('hellosolarsystem').service('PeopleService', function($http) {
  // var self = this;
  var people = [{
    "id": "1",
    "name": "Ingrid Townsend",
  },
  {
    "id": "2",
    "name": "Edward Nolan",
  },
  {
    "id": "3",
    "name": "Maria Peru",
  },
  {
    "id": "4",
    "name": "Alan Patryk",
  },
  {
    "id": "5",
    "name": "John Smith",
  }];
  var service = {
    getAllPeople: function() {
        return people;
    },
    
    getPerson: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }
        return people.find(personMatchesParam)
    }
  }
  
  return service;
})
