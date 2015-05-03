eNotifyModule.controller('userHomeController', ['$scope', '$state','$rootScope','urlList','$ionicPopup','$http','ionicLoader','$ionicLoading', function($scope, $state,$rootScope,urlList,$ionicPopup,$http,ionicLoader,$ionicLoading) {

    $scope.name=localStorage.getItem("username");




    $scope.factoryURL=urlList.getAllURLS;

    $scope.logout= function () {

        ionicLoader.show($ionicLoading);
        var url=$scope.factoryURL.hostURL + 'logout';

        $http({
            method: 'GET',
            url: url


        }).success(function(data){

            localStorage.clear();
            $state.go('login');
            ionicLoader.hide($ionicLoading);

        }).error(function (err) {

            ionicLoader.hide($ionicLoading);
            $ionicPopup.alert({
                template:'Could not Logout'
            });
        });
        


    };

    

}]);