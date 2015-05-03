eNotifyModule.factory('urlList',function() {


    var _getAllURLS= {

        hostURL:'http://tasnotifier-env.elasticbeanstalk.com/'

    };

    return{

        getAllURLS: _getAllURLS






    }





});

eNotifyModule.factory('ionicLoader', function() {


    return {

        show : function($ionicLoading) {
            $ionicLoading.show({
                template: 'Loading...'
            });
        },
        hide : function($ionicLoading){
            $ionicLoading.hide();

        }
    };


});