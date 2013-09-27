
var exec = require("cordova/exec");

var VideoPlayer = function() {
};

VideoPlayer.prototype.play = function(url) {
	var successCallback = function(event) {
        console.log('play success');
	};

	var errorCallback = function() {
        console.log('play failed');
	};

    exec(successCallback, errorCallback, "VideoPlayer", "playVideo", [url]);
};

module.exports = new VideoPlayer();