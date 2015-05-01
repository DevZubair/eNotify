eNotifyModule.controller('loginController', ['$scope', '$state','$rootScope','$ionicSideMenuDelegate', function($scope, $state,$rootScope,$ionicSideMenuDelegate) {

    $scope.username='';
    $scope.userPassword='';


    $scope.userLogin = function(){

    }











    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };


}]);