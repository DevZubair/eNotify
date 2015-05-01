eNotifyModule.controller('createNotification', ['$scope', '$state','$rootScope','$http', function($scope, $state,$rootScope,$http) {

    $scope.comment='';
    $scope.textDelivery='';
    $scope.voiceDelivery='';
    $scope.locationType='';
    $scope.zip='';

    $scope.selectOption='';
    $scope.notificationData = {};

    $scope.acutalDelivery = {};
    $scope.selectValue={};


    $scope.allstates = [];
    $scope.allCountyies = [];

    $scope.value='';

    $scope.selectFunction=function(){
        $http.get('http://tasnotifier-env.elasticbeanstalk.com/utils/states')
            .success(function(data){
                $scope.allstates=data;
                console.log(data);
            }).error(function(err){
                console.log(err);
            })
    };


    $scope.allCounty = function(value){
        $http.get('http://tasnotifier-env.elasticbeanstalk.com/utils/counties?state='+value)
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

        $http.post('http://tasnotifier-env.elasticbeanstalk.com/api/notification', {
            message:$scope.notificationData.comment,
            textNotification:$scope.notificationData.textDelivery,
            voiceNotification:$scope.notificationData.voiceDelivery,
            locationType:$scope.selectValue.selectOption,
            location:$scope.notificationData.zip
        }).success(function(data){
            console.log(data);
        }).error(function(err){
            console.log(err);
        })
    }

}]);