eNotifyModule.controller('viewNotificationController', ['$scope', '$state','$http', function($scope, $state,$http) {

    $scope.viewNotificationData = [];

    $http.get('http://tasnotifier-env.elasticbeanstalk.com/api/notification/')
        .success(function(data){
            $scope.viewNotificationData=data;
            console.log(data);
        }).error(function(err){
            console.log(err);
        })

}]);
