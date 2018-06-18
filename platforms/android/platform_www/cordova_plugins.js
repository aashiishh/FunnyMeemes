cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-browsertab.BrowserTab",
        "file": "plugins/cordova-plugin-browsertab/www/browsertab.js",
        "pluginId": "cordova-plugin-browsertab",
        "clobbers": [
            "cordova.plugins.browsertab"
        ]
    },
    {
        "id": "cordova-plugin-buildinfo.BuildInfo",
        "file": "plugins/cordova-plugin-buildinfo/www/buildinfo.js",
        "pluginId": "cordova-plugin-buildinfo",
        "clobbers": [
            "BuildInfo"
        ]
    },
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-ionic-keyboard.keyboard",
        "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
        "pluginId": "cordova-plugin-ionic-keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-universal-links-plugin.universalLinks",
        "file": "plugins/cordova-universal-links-plugin/www/universal_links.js",
        "pluginId": "cordova-universal-links-plugin",
        "clobbers": [
            "universalLinks"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.2.0",
    "cordova-plugin-browsertab": "0.2.0",
    "cordova-plugin-buildinfo": "2.0.1",
    "cordova-plugin-device": "2.0.2",
    "cordova-plugin-inappbrowser": "3.0.0",
    "cordova-plugin-ionic-keyboard": "2.0.5",
    "cordova-plugin-ionic-webview": "1.1.19",
    "cordova-plugin-splashscreen": "5.0.2",
    "cordova-plugin-whitelist": "1.3.3",
    "cordova-universal-links-plugin": "1.2.1"
};
// BOTTOM OF METADATA
});