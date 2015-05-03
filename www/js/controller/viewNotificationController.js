eNotifyModule.controller('viewNotificationController', ['$scope', '$state','$http','urlList','ionicLoader','$ionicLoading', function($scope, $state,$http,urlList,ionicLoader,$ionicLoading) {

    $scope.viewNotificationData = [];
    $scope.factoryURL=urlList.getAllURLS;

    ionicLoader.show($ionicLoading);

    var url=$scope.factoryURL.hostURL + 'api/notification';


    $http({
        method: 'GET',
        url: url,
        headers: {'Content-Type': 'application/json'}

    }).success(function(data){

        $scope.viewNotificationData=data;
for(var i=0;i<$scope.viewNotificationData.length;i++){
    $scope.viewNotificationData[i].createdTs=new Date($scope.viewNotificationData[i].createdTs);
}
        ionicLoader.hide($ionicLoading);
        console.log(data);

    }).error(function(err){

        console.log(err);
        ionicLoader.hide($ionicLoading);
    })

}]);
