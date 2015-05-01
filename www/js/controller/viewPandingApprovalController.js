eNotifyModule.controller('viewPandingApprovalController', ['$scope', '$state','$http', function($scope, $state,$http) {

    $scope.viewPandingApproval = [];

    $http.get('http://tasnotifier-env.elasticbeanstalk.com/api/tasuser/pending')
        .success(function(data){
            $scope.viewPandingApproval = data;
            console.log(data);
        }).error(function(err){
           console.log(err);
        })
}]);