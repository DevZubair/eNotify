eNotifyModule.controller('loginController', ['$scope', '$state','$rootScope','$ionicSideMenuDelegate', function($scope, $state,$rootScope,$ionicSideMenuDelegate) {

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };


}]);