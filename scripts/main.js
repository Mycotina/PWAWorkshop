'use strict';

(function(){
	console.log("Main is called!");
	if('serviceWorker' in navigator){
		console.log("Try registering service worker!");
		navigator.serviceWorker.register('sw.js').then(function() {
	   	console.log("service worker is ready to work!");
	  });
	}
})();