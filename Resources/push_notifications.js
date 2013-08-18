var apns = function(){
 // var pref = require('preferences').preferences;
 Ti.API.info("hi I am in apns");
  Titanium.Network.registerForPushNotifications({
    types: [
        Titanium.Network.NOTIFICATION_TYPE_BADGE,
        Titanium.Network.NOTIFICATION_TYPE_ALERT
    ],
    success:function(e)
    {
        var deviceToken = e.deviceToken;
        Ti.API.info("Push notification device token is: "+deviceToken);
        Ti.API.info("Push notification types: "+Titanium.Network.remoteNotificationTypes);
        Ti.API.info("Push notification enabled: "+Titanium.Network.remoteNotificationsEnabled);
        /*var http = Ti.Network.createHTTPClient();
        http.onload = function(){
          // do nothing.
        };
        http.open('GET', pref.apns_url + "?deviceuid=" + escape(Titanium.Platform.id)+"&devicetoken="+escape(e.deviceToken));
        http.send();*/
       var curNotif = Ti.App.iOS.scheduleLocalNotification({
    		alertBody:'The schedule notification is alaerted!',	
    		date:new Date(new Date().getTime() + 5000),
    		repeat:'daily'
  		}); 
    },
    error:function(e)
    {
        Ti.API.info("Error during registration: "+e.error);
    },
    callback:function(e)
    {
        // called when a push notification is received.
      Titanium.Media.vibrate();
      var data = JSON.parse(e.data);
      var badge = data.badge;
      if(badge > 0){
        Titanium.UI.iPhone.appBadge = badge;
      }
      var message = data.message;
      if(message != ''){
        var my_alert = Ti.UI.createAlertDialog({title:'', message:message});
        my_alert.show();
      }
    }
  }); 
};
module.exports = {apns:apns};