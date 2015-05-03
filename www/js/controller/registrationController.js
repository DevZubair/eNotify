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
        if($scope.registerationData.Notifier==true && $scope.registerationData.Approval==true){
            $scope.actualRole='NOTIFIER, APPROVER';
        }


        var url=$scope.factoryURL.hostURL + 'utils/register' ;

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

            $rootScope.profile=data;
            console.log('Success Login');
            $state.go('registrationConfirmation');



        }).error(function(err){
            console.log(err);
            if(err.errror_code=='SYSTEM_ERROR'){
                /*alert('Username unavailable. Please choose a different username');*/
                $ionicPopup.alert({
                    template:err.error_message
                });
            }
        })



    }


}]);