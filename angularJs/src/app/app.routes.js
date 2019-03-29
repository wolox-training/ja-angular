angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('dashboard');
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
      .state('centered.dashboard', {
        url: '/dashboard',
        views: {
          content: {
            templateUrl: '../app/components/auth/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
          }
        }
      })
      .state('centered.detail', {
        url: '/detail',
        views: {
          content: {
            templateUrl: '../app/components/auth/book-detail/bookDetail.html',
            controller: 'BookDetailController',
            controllerAs: 'vm'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
