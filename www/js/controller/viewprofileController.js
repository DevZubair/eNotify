eNotifyModule.controller('viewProfileController', ['$scope', '$state','$http','urlList', function($scope, $state,$http,urlList) {


    $scope.profile = '';

    $scope.factoryURL=urlList.getAllURLS;

    $http.get($scope.factoryURL.hostURL + 'api/tasuser/profile')
        .success(function(data){
            $scope.profile = data;
        }).error(function(err){
            console.log(err);
        })

}]);
