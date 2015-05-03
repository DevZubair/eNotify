eNotifyModule.controller('viewProfileController', ['$scope', '$state','$http','urlList','ionicLoader','$ionicLoading', function($scope, $state,$http,urlList,ionicLoader,$ionicLoading) {

    ionicLoader.show($ionicLoading);

    $scope.profile = '';

    $scope.factoryURL=urlList.getAllURLS;

    $http.get($scope.factoryURL.hostURL + 'api/tasuser/profile')
        .success(function(data){
            data.createdTs=new Date(data.createdTs);
            $scope.profile = data;
            ionicLoader.hide($ionicLoading);

        }).error(function(err){
            console.log(err);
            ionicLoader.hide($ionicLoading);
        })


}]);
