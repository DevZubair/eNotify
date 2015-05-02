eNotifyModule.controller('viewPendingApprovalController', ['$scope', '$state','$http','urlList', function($scope, $state,$http,urlList) {

    $scope.viewPandingApproval = [];
    $scope.approveDeny=false;
    $scope.approve=true;
    $scope.deny=true;

    $scope.factoryURL=urlList.getAllURLS;

    $http.get($scope.factoryURL.getApprovalURL)

        .success(function(data){
            $scope.viewPandingApproval = data;
            console.log(data);
        }).error(function(err){
           console.log(err);
        });


    $scope.approveDenyFunc=function(name){

        $scope.approveDeny=true;

        if(name=='approve'){
            $scope.approve=false;
        }
        else if(name=='deny'){
            $scope.deny=false;
        }


    }
}]);