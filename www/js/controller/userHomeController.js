eNotifyModule.controller('userHomeController', ['$scope', '$state','$rootScope','urlList', function($scope, $state,$rootScope,urlList) {

    $scope.name=localStorage.getItem("username");


    $scope.factoryURL=urlList.getAllURLS;

    $scope.logout= function () {

        localStorage.clear();
        $state.go('login');

    };

    

}]);