eNotifyModule.factory('urlList',function() {


    var _getAllURLS= {
        loginURL:'http://tasnotifier-env.elasticbeanstalk.com/login',
        registrationURL:'http://tasnotifier-env.elasticbeanstalk.com/utils/register',
        statesURL:'http://tasnotifier-env.elasticbeanstalk.com/utils/states',
        countyURL:'http://tasnotifier-env.elasticbeanstalk.com/utils/counties?state=',
        createNotificationURL:'http://tasnotifier-env.elasticbeanstalk.com/api/notification',
        getNotificationURL:'http://tasnotifier-env.elasticbeanstalk.com/api/notification',
        getApprovalURL:'http://tasnotifier-env.elasticbeanstalk.com/api/tasuser/pending',
        getProfileURL:'http://tasnotifier-env.elasticbeanstalk.com/api/tasuser/profile'
    };

    return{

        getAllURLS: _getAllURLS






    }





});