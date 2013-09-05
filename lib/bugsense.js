var http = require("http");
var api_token = '34337e39';
var host = 'www.bugsense.com';
var path = '/api/errors';


var obj = {
    "client": {
        "name": "bugsense-js", // Obligatory
        "version": "1.1"
    },
    "exception": {
        "message": "java.lang.RuntimeException: exception requested", // Obligatory
        "where": "MainActivity.java:47", // Obligatory
        "klass": "java.lang.RuntimeException", // Type of exception
        "backtrace": "java.lang.RuntimeException: exception requested\r\nat com.sfalma.trace.example.MainActivity$1.onClick(MainActivity.java:47)\r\nat android.view.View.performClick(View.java:2408)\r\nat android.view.View$PerformClick.run(View.java:8816)\r\nat android.os.Handler.handleCallback(Handler.java:587)\r\nat android.os.Handler.dispatchMessage(Handler.java:92)\r\nat android.os.Looper.loop(Looper.java:123)\r\nat android.app.ActivityThread.main(ActivityThread.java:4627)\r\nat java.lang.reflect.Method.invokeNative(Native Method)\r\nat java.lang.reflect.Method.invoke(Method.java:521)\r\nat com.android.internal.os.ZygoteInit$MethodAndArgsCaller.run(ZygoteInit.java:868)\r\nat com.android.internal.os.ZygoteInit.main(ZygoteInit.java:626)\r\nat dalvik.system.NativeStart.main(Native Method)\\n" // Obligatory
    },
    "application_environment": {
        "phone": "android", // Device model (could be PC or Max) Obligatory
        "appver": "1.2", // Obligatory
        "appname": "com.sfalma", // Obligatory
        "osver": "2.3", // Obligatory
        "wifi_on": "true",
        "mobile_net_on": "true",
        "gps_on": "true",
        "screen_dpi(x:y)": "120.0:120.0",
        "screen:width": "240",
        "screen:height": "400",
        "screen:orientation": "normal",
        "uid": "234243-2sdf345-sdfs3452345" // Unique identifier
    },
    "feedback": {
        "email": "test@bugsense.com",
        "description": "I just had a crash :("
    }
};


var options = {
    host: host,
    path: path,
    port: '80',
    method: 'POST',
    headers: {'X-BugSense-Api-Key': api_token, 'Content-Type': 'application/x-www-form-urlencoded'}
};

var callback = function (response) {
    var str = ''
    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(str);
    });
};

var req = http.request(options, callback);
req.end(JSON.stringify(obj));