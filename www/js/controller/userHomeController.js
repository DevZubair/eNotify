eNotifyModule.controller('userHomeController', ['$scope', '$state','$rootScope','urlList','$ionicPopup','$http', function($scope, $state,$rootScope,urlList,$ionicPopup,$http) {

    $scope.name=localStorage.getItem("username");




    $scope.factoryURL=urlList.getAllURLS;

    $scope.logout= function () {


        var url=$scope.factoryURL.hostURL + 'logout';

        $http({
            method: 'GET',
            url: url


        }).success(function(data){

            localStorage.clear();
            $state.go('login');

        }).error(function (err) {

            $ionicPopup.alert({
                template:'Could not Logout'
            });
        });
        


    };

    

}]);