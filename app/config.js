myApp.config(function($stateProvider) {
    // An array of state definitions
    var states = [

      { 
        name: 'people', 
        url: '/people', 
        component: 'people',
        resolve: {
          people: function(PeopleService) {
            return PeopleService.getAllPeople();
          }
        }
      },
      
      { 
        name: 'person', 
        url: '/people/{personId}', 
        component: 'person',
        resolve: {
          person: function(PeopleService, $transition$) {
            return PeopleService.getPerson($transition$.params().personId);
          }
        }
      }
    ]
    
    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  });