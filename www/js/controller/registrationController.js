eNotifyModule.controller('registrationController', ['$scope', '$state','$rootScope','$http', function($scope, $state,$rootScope,$http) {

    $scope.firstName='';
    $scope.lastName='';
    $scope.Username='';
    $scope.phoneNumber='';
    $scope.Password='';
    $scope.Notifier='';
    $scope.Approval='';
    $scope.registerationData={};

    $scope.actualRole='';


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

        $http.post('http://tasnotifier-env.elasticbeanstalk.com/utils/register', {

            name: $scope.registerationData.firstName + $scope.registerationData.lastName,
            phone: $scope.registerationData.phoneNumber,
            username: $scope.registerationData.Username,
            password: $scope.registerationData.Password,
            roles: $scope.actualRole

        }).success(function(data){
            if(data.errror_code=='SYSTEM_ERROR'){
                alert('Username unavailable. Please choose a different username');
            }
            else{
                $state.go('login');
            }
        }).error(function(err){
            alert(err);
        })
    }
}]);