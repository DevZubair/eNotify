eNotifyModule.controller('viewProfileController', ['$scope', '$state','$http', function($scope, $state,$http) {
$scope.profile = '';
    $http.get('http://tasnotifier-env.elasticbeanstalk.com/api/tasuser/profile')
        .success(function(data){
            $scope.profile = data;
        }).error(function(err){
            console.log(err);
        })

}]);
