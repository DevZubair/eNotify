

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var eNotifyModule=angular.module('eNotifyModule',
    [
        'ionic'



    ]);

eNotifyModule.run(function($ionicPlatform,$http) {



    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }


    });




});



eNotifyModule.config(function($stateProvider,$urlRouterProvider,$httpProvider){


    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;

    $urlRouterProvider.otherwise('/');


    //Turn authenticate to true to enable security and authentication.



    $stateProvider

        .state('login', {
            cache:false,
            url: '/',
            templateUrl: 'Templates/login.html',
            controller:'loginController'
        })

        .state('Register', {
            cache:false,
            url: '/register',
            templateUrl: 'Templates/Registration.html',
            controller:'registrationController'
        })
        .state('registrationConfirmation', {

            url: '/confirmation',
            templateUrl: 'Templates/registrationConfirmation.html',
            controller:'registrationController'
        })
        .state('homePage', {
            cache:false,
            url: '/homepage',
            templateUrl: 'Templates/userHomePage.html',
            controller:'userHomeController'
        })
        .state('createNotification', {
            cache:false,
            url: '/createNotification',
            templateUrl: 'Templates/createNotification.html',
            controller:'createNotification'
        })
        .state('notificationConfirmation', {

            url: '/notificationConfirmation',
            templateUrl: 'Templates/notificationConfirmationPage.html',
            controller:'createNotification'
        })
        .state('viewNotification', {
            cache:false,
            url: '/viewNotification',
            templateUrl: 'Templates/viewNotification.html',
            controller:'viewNotificationController'
        })
        .state('viewProfile', {
            cache:false,
            url: '/viewProfile',
            templateUrl: 'Templates/viewProfile.html',
            controller:'viewProfileController'
        })
        .state('viewPendingApproval', {
            cache:false,
            url: '/viewApproval',
            templateUrl: 'Templates/viewPendingApproval.html',
            controller:'viewPendingApprovalController'
        })


}).controller('indexController', function ($scope,$state) {

    $scope.optionValue="Menu";


    $scope.profileF=function(name){

        if(name=="Profile")
        {
            $scope.optionValue="Menu";
            $state.go('viewProfile');

        }
        else if( name=="Logout"){

            $scope.optionValue="Menu";
            localStorage.clear();
            $state.go('login');

        }
        else{
            $scope.optionValue="Menu";
            $state.go('homePage');
        }


    }

});
