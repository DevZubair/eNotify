eNotifyModule.controller('loginController', ['$scope', '$state','$rootScope','$ionicSideMenuDelegate','$http','$ionicPopup','urlList', function($scope, $state,$rootScope,$ionicSideMenuDelegate,$http,$ionicPopup,urlList) {

    $scope.username='';
    $scope.password='';
    $scope.userData={};

    $scope.invalidPassowrd=false;



    $scope.factoryURL=urlList.getAllURLS;



    $scope.userLogin = function(){

        var url=$scope.factoryURL.loginURL;

        $http({
            method: 'POST',
            url: url,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            transformRequest: function(obj) {
                var str = [];
                for(var p in obj)
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                return str.join("&");
            },
            data: $scope.userData
        }).success(function(data){
            localStorage.setItem('username',data.name);
            if(data.error_code==401){

                $ionicPopup.alert({
                    template:'invalid password'
                });

            }
            else{
                console.log(data);
                $state.go('homePage');
            }




        }).error(function (err) {
            $scope.invalidPassowrd=true;
            console.log(err);



        })





    };



    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };


}]);