eNotifyModule.controller('viewPendingApprovalController', ['$scope', '$state','$http','urlList','ionicLoader','$ionicLoading', function($scope, $state,$http,urlList,ionicLoader,$ionicLoading) {

    $scope.viewPandingApproval = [];
    $scope.approveDeny=true;
    $scope.approve=false;
    $scope.deny=false;

    ionicLoader.show($ionicLoading);
    $scope.factoryURL=urlList.getAllURLS;

    $http.get($scope.factoryURL.hostURL + 'api/tasuser/pending')

        .success(function(data){
            $scope.viewPandingApproval = data;

            for(var i=0;i<$scope.viewPandingApproval.length;i++){
                $scope.viewPandingApproval[i].createdTs=new Date($scope.viewPandingApproval[i].createdTs);
            }



            console.log(data);
            ionicLoader.hide($ionicLoading);
        }).error(function(err){
           console.log(err);
            ionicLoader.hide($ionicLoading);
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