eNotifyModule.controller('loginController', ['$scope', '$state','$rootScope','$ionicSideMenuDelegate','$http', function($scope, $state,$rootScope,$ionicSideMenuDelegate,$http) {

    $scope.Username='';
    $scope.userPassword='';
    $scope.userData={};

    $scope.userLogin = function(){

        $http.post('http://tasnotifier-env.elasticbeanstalk.com/login',{

            username:"approver1",
            password:"approver123"

        }).success(function(data){

            if(data.error_code==401){
                alert('invalid password');
            }
            else{
                $state.go('homePage');
            }




        })
    };











    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };


}]);