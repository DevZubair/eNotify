

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var eNotifyModule=angular.module('eNotifyModule',
    [
      'ionic'


    ]);

eNotifyModule.run(function($ionicPlatform) {



  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)

    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }


  })




});

eNotifyModule.config(function($stateProvider,$urlRouterProvider){





  $urlRouterProvider.otherwise('/');


  //Turn authenticate to true to enable security and authentication.



  $stateProvider

      .state('login', {
        url: '/',
        templateUrl: 'Templates/login.html',
        controller:'loginController'
      })

      .state('Register', {
        url: '/register',
        templateUrl: 'Templates/Registration.html',
        controller:'registrationController'
      })
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'Templates/registrationConfirmation.html',
        controller:'registrationConfirmationController'
      })
      .state('homePage', {
        url: '/homepage',
        templateUrl: 'Templates/userHomePage.html',
        controller:'userHomeController'
      })
      .state('createNotification', {
          url: '/createNotification',
          templateUrl: 'Templates/createNotification.html',
          controller:'createNotification'
      })
      .state('notificationConfirmation', {
          url: '/notificationConfirmation',
          templateUrl: 'Templates/notificationConfirmationPage.html',
          controller:'notificationConfirmationController'
      })
      .state('viewNotification', {
          url: '/viewNotification',
          templateUrl: 'Templates/viewNotification.html',
          controller:'viewNotificationController'
      })
      .state('viewProfile', {
          url: '/viewProfile',
          templateUrl: 'Templates/viewProfile.html',
          controller:'viewProfileController'
      })
      .state('viewPandingApproval', {
          url: '/viewApproval',
          templateUrl: 'Templates/viewPandingApproval.html',
          controller:'viewPandingApprovalController'
      })


});
