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
      })
      .state('unauth', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/unauth/unauth.html'
          }
        }
      })
      .state('unauth.signUp', {
        url: '/sign-up',
        views: {
          content: {
            templateUrl: '../app/components/unauth/sign-up/signUp.html',
            controller: 'SignUpController',
            controllerAs: 'vm'
          }
        }
      })
      .state('unauth.signIn', {
        url: '/sign-in',
        views: {
          content: {
            templateUrl: '../app/components/unauth/sign-in/signIn.html',
            controller: 'SignInController',
            controllerAs: 'vm'
          }
        }
      })
      ;

    $locationProvider.html5Mode(true);
  }
]);
