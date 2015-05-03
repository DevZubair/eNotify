eNotifyModule.controller('viewPendingApprovalController', ['$scope', '$state','$http','urlList','ionicLoader','$ionicLoading', function($scope, $state,$http,urlList,ionicLoader,$ionicLoading) {

    $scope.viewPandingApproval = [];
    $scope.approveDeny=true;


    $scope.name=localStorage.getItem("username");
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


    $scope.approveDenyFunc=function(name,userData){

        ionicLoader.show($ionicLoading);


        var approve_deny=document.getElementById(userData.id);
        if(name=="approve")
        {
            $http.get($scope.factoryURL.hostURL + 'api/tasuser/' + userData.id + '/approve')

                .success(function (data) {

                    approve_deny.innerHTML='Approved!';
                    approve_deny.style.color='green';
                    ionicLoader.hide($ionicLoading);

                }).error(function (err) {

                    ionicLoader.hide($ionicLoading);

                });



        }
        else if(name=="deny"){

            $http.get($scope.factoryURL.hostURL + 'api/tasuser/' + userData.id + '/deny')

                .success(function (data) {

                    approve_deny.innerHTML='Deny!';
                    approve_deny.style.color='red';
                    ionicLoader.hide($ionicLoading);

                }).error(function (err) {

                    ionicLoader.hide($ionicLoading);

                });



        }

        userData.id=false;


    }
}]);