

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
        templateUrl: 'Templates/login.html'
      })

      .state('Register', {
        url: '/register',
        templateUrl: 'Templates/Registration.html'
      })
      .state('confirmation', {
        url: '/confirmation',
        templateUrl: 'Templates/registrationConfirmation.html'
      })
      .state('homePage', {
        url: '/homepage',
        templateUrl: 'Templates/userHomePage.html'
      })


});
