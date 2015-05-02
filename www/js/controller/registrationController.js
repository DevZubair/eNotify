eNotifyModule.controller('registrationController', ['$scope', '$state','$rootScope','$http','$ionicPopup','urlList', function($scope, $state,$rootScope,$http,$ionicPopup,urlList) {

    $scope.firstName='';
    $scope.lastName='';
    $scope.Username='';
    $scope.phoneNumber='';
    $scope.Password='';
    $scope.Notifier='';
    $scope.Approval='';
    $scope.registerationData={};

    $scope.actualRole='';

    $scope.factoryURL=urlList.getAllURLS;

    $scope.registrationUser = function() {


        if($scope.registerationData.Notifier==true){
            $scope.actualRole='NOTIFIER';
        }
        else if($scope.registerationData.Approval==true)
        {
            $scope.actualRole='APPROVER';
        }
        else{
            $scope.actualRole='';
        }

        var url=$scope.factoryURL.registrationURL;

        $http({
            method: 'POST',
            url: url,

            data: {
                name : $scope.registerationData.firstName + '' + $scope.registerationData.lastName,
                phone : $scope.registerationData.phoneNumber,
                username :  $scope.registerationData.Username,
                password :  $scope.registerationData.Password,
                roles  :  $scope.actualRole

            }


        }).success(function(data){

            if(data.errror_code=='SYSTEM_ERROR'){
                /*alert('Username unavailable. Please choose a different username');*/
                $ionicPopup.alert({
                    template:'Username unavailable. Please choose a different username'
                });
            }
            else{
                console.log('Success Login');
                $state.go('login');
            }

        }).error(function(err){
            console.log(err);
        })



    }


}]);