eNotifyModule.controller('viewProfileController', ['$scope', '$state','$http','urlList', function($scope, $state,$http,urlList) {


    $scope.profile = '';

    $scope.factoryURL=urlList.getAllURLS;

    $http.get( $scope.factoryURL.getProfileURL)
        .success(function(data){
            $scope.profile = data;
        }).error(function(err){
            console.log(err);
        })

}]);
