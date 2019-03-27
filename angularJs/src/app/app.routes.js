angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('centered.state1');
    });

    // Now set up the states
    $stateProvider
      .state('centered', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/auth/auth.html'
          }
        }
      })
      .state('centered.state1', {
        url: '/state1',
        views: {
          content: {
            templateUrl: '../app/components/auth/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
          }
        }
      })
      .state('centered.state2', {
        url: '/state2',
        views: {
          content: {
            templateUrl: '../app/components/auth/component2/component2.html',
            controller: 'Component2Controller',
            controllerAs: 'comp2Ctrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
