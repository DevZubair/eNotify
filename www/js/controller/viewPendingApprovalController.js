eNotifyModule.controller('viewPendingApprovalController', ['$scope', '$state','$http','urlList', function($scope, $state,$http,urlList) {

    $scope.viewPandingApproval = [];
    $scope.approveDeny=true;
    $scope.approve=false;
    $scope.deny=false;

    $scope.factoryURL=urlList.getAllURLS;

    $http.get($scope.factoryURL.hostURL + 'api/tasuser/pending')

        .success(function(data){
            $scope.viewPandingApproval = data;
            console.log(data);
        }).error(function(err){
           console.log(err);
        });


    $scope.approveDenyFunc=function(name){

        $scope.approveDeny=false;

        if(name=='approve'){
            $scope.approve=true;
        }
        else if(name=='deny'){
            $scope.deny=true;
        }


    }
}]);