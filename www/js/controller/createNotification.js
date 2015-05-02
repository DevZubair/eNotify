eNotifyModule.controller('createNotification', ['$scope', '$state','$rootScope','$http','$ionicPopup','urlList', function($scope, $state,$rootScope,$http,$ionicPopup,urlList) {

    $scope.comment='';
    $scope.textDelivery='';
    $scope.voiceDelivery='';
    $scope.locationType='';
    $scope.zip='';
    $scope.value='';
    $scope.county='';

    $scope.selectOption='';
    $scope.notificationData = {};

    $scope.acutalDelivery = {};
    $scope.selectValue={};


    $scope.id='';
    $scope.message='';
    $scope.textNotification='';
    $scope.voiceNotification='';
    $scope.recipientsCount='';
    $scope.createdTs='';


    $scope.allstates = [];
    $scope.allCountyies = [];
    $scope.location='';
    $scope.value='';
    $scope.locationSelection='';


    $scope.factoryURL=urlList.getAllURLS;



    $scope.selectFunction=function(){
        $http.get($scope.factoryURL.statesURL)
            .success(function(data){
                $scope.allstates=data;
                console.log(data);
            }).error(function(err){
                console.log(err);
            })
    };


    $scope.allCounty = function(value){
        $http.get($scope.factoryURL.countyURL+value)
            .success(function(data){
                $scope.allCountyies = data;
            }).error(function(){
                console.log(err);
            })

    };



    $scope.select=function() {

        if ($scope.selectValue.selectOption == 'Zip') {
            $scope.Zip = true;
            $scope.County = false;
            $scope.state=false;
        }
        else if($scope.selectValue.selectOption == 'County'){
            $scope.Zip = false;
            $scope.County = true;
            $scope.state=true;
        }
        else if($scope.selectValue.selectOption=='state')
        {
            $scope.Zip = false;
            $scope.County = false;
            $scope.state=true;
        }
        else if($scope.selectValue.selectOption=='National') {
            $scope.Zip = false;
            $scope.County = false;
            $scope.state=false;
        }
    };

    $scope.createNotification=function() {

        if($scope.notificationData.zip!=undefined){
            $scope.locationSelection=$scope.notification.zip
        }
        else if($scope.notificationData.value!=undefined){
            $scope.locationSelection=$scope.notificationData.value
        }
        else if($scope.notificationData.county!=undefined){
            $scope.locationSelection=$scope.notificationData.county
        }



        var url=$scope.factoryURL.createNotificationURL;

        $http({
            method: 'POST',
            url: url,

            data: {
                message: $scope.notificationData.comment,
                textNotification: $scope.notificationData.textDelivery,
                voiceNotification: $scope.notificationData.voiceDelivery,
                locationType: $scope.selectValue.selectOption,
                location:  $scope.locationSelection

            }


        }).success(function(data){

            $scope.id = data.id;
            $scope.message=data.message;
            $scope.textNotification=data.textNotification;
            $scope.voiceNotification=data.voiceNotification;
            $scope.recipientsCount=data.recipientsCount;
            $scope.createdTs=data.createdTs;

            if(data.errror_code=='SYSTEM_ERROR'){
                /* alert('Username unavailable. Please choose a different username');*/
                $ionicPopup.alert({
                    template:'Username unavailable. Please choose a different username'
                });
            }
            else{
                console.log(data);
            }

        }).error(function(err){
            console.log(err);
        });


        $state.go('notificationConfirmation');

    }

}]);