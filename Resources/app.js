/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

/*if (Ti.Platform.name != 'android'){
		apns = require('push_notifications');
		apns.apns();
	}*/

var win1 = Ti.UI.createWindow({  
  title:'Background Services Example',
  backgroundColor:'#4186cd',
  modal:true
});

Ti.API.info('Registering background services');
var dateTime = new Date(new Date().getTime() + 30000);
console.log("time is "+dateTime.toTimeString());

//var service = Ti.App.iOS.registerBackgroundService({url:'bg-service1.js'});
//var service2 = Ti.App.iOS.registerBackgroundService({url:'bg-service2.js'});
var curNotif = Ti.App.iOS.scheduleLocalNotification({
    alertBody:'This is an alert @time' + dateTime.toDateString() + " " + dateTime.toTimeString(),
    date:dateTime // 1 second after pause
  }); 
Ti.API.info('*** Press home button to pause application ***');

win1.open();

//bootstrap and check dependencies
/*if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with multiple windows in a stack
(function() {
	//render appropriate components based on the platform and form factor
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	var apns;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			
			Window = require('ui/handheld/ApplicationWindow');
			
			//Ti.API.info("running apns!");
			//register notification
			
			//Ti.API.info("end running apns!");
		}
	}
	new Window().open();
	
})();*/
