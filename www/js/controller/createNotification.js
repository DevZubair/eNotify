eNotifyModule.controller('createNotification', ['$scope', '$state','$rootScope','$http','$ionicPopup','urlList', function($scope, $state,$rootScope,$http,$ionicPopup,urlList) {




    $scope.name=localStorage.getItem("username");
    $scope.comment='';
    $scope.textDelivery='';
    $scope.voiceDelivery='';
    $scope.locationType='';
    $scope.zip='';
    $scope.stateValue='';
    $scope.county='';

    $scope.selectOption='';
    $scope.notificationData = {};
    $scope.notificationData.textDelivery=false;
    $scope.notificationData.voiceDelivery=false;

    $scope.acutalDelivery = {};
    $scope.selectValue={};


    $scope.allstates = [];
    $scope.allCountyies = [];
    $scope.location='';
    $scope.value='';
    $scope.locationSelection='';


    $scope.factoryURL=urlList.getAllURLS;



    $scope.selectFunction=function(){
        $http.get($scope.factoryURL.hostURL + 'utils/states')
            .success(function(data){
                $scope.allstates=data;
                console.log(data);
            }).error(function(err){
                console.log(err);
            })
    };


    $scope.allCounty = function(value){
        $http.get($scope.factoryURL.hostURL +'utils/counties?state='+value)
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
            $scope.locationSelection=$scope.notificationData.zip
        }
        else if($scope.notificationData.stateValue!=undefined){
            $scope.locationSelection=$scope.notificationData.stateValue
        }
        else if($scope.notificationData.county!=undefined){
            $scope.locationSelection=$scope.notificationData.county
        }
        else{
            $scope.locationSelection="National"
        }



        var url=$scope.factoryURL.hostURL + 'api/notification/create?message=' + $scope.notificationData.comment + '&locationType=' + $scope.selectValue.selectOption + '&location=' + $scope.locationSelection + '&textNotification=' + $scope.notificationData.textDelivery + '&voiceNotification=' + $scope.notificationData.voiceDelivery;

        $http({
            method: 'GET',
            url: url,

            data: {
                message: $scope.notificationData.comment,
                textNotification: $scope.notificationData.textDelivery,
                voiceNotification: $scope.notificationData.voiceDelivery,
                locationType: $scope.selectValue.selectOption,
                location:  $scope.locationSelection

            }


        }).success(function(data){

            $rootScope.id = data.id;
            $rootScope.message=data.message;
            $rootScope.textNotification=data.textNotification;
            $rootScope.voiceNotification=data.voiceNotification;
            $rootScope.recipientsCount=data.recipientsCount;
            $rootScope.createdTs=new Date(data.createdTs);
            $rootScope.locationTypes=$scope.selectValue.selectOption;
            $rootScope.locations= $scope.locationSelection;


            if(data.errror_code=='SYSTEM_ERROR'){
                /* alert('Username unavailable. Please choose a different username');*/
                $ionicPopup.alert({
                    template:'Username unavailable. Please choose a different username'
                });
            }
            else{
                console.log(data);
                $state.go('notificationConfirmation');
            }

        }).error(function(err){
            console.log(err);
        });




    }

}]);