eNotifyModule.controller('loginController', ['$scope', '$state','$rootScope','$ionicSideMenuDelegate','$http','$ionicPopup','urlList','ionicLoader','$ionicLoading', function($scope, $state,$rootScope,$ionicSideMenuDelegate,$http,$ionicPopup,urlList,ionicLoader,$ionicLoading) {

    $scope.username='';
    $scope.password='';
    $scope.userData={};

    $scope.invalidPassowrd=false;



    $scope.factoryURL=urlList.getAllURLS;



    $scope.userLogin = function(){

        ionicLoader.show($ionicLoading);

        var url=$scope.factoryURL.hostURL + 'login';

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
                ionicLoader.hide($ionicLoading);
                $state.go('homePage');
            }




        }).error(function (err) {

            ionicLoader.hide($ionicLoading);
            $scope.invalidPassowrd=true;
            console.log(err);



        })





    };




}]);