eNotifyModule.controller('viewNotificationController', ['$scope', '$state','$http','urlList', function($scope, $state,$http,urlList) {

    $scope.viewNotificationData = [];
    $scope.factoryURL=urlList.getAllURLS;



    var url=$scope.factoryURL.getNotificationURL;


    $http({
        method: 'GET',
        url: url,
        headers: {'Content-Type': 'application/json'}

    }).success(function(data){

        $scope.viewNotificationData=data;

        console.log(data);

    }).error(function(err){

        console.log(err);
    })

}]);
