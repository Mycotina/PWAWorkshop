'use strict';

(function(){
	console.log("Main is called!");
	if('serviceWorker' in navigator){
		console.log("Try registering service worker!");
		navigator.serviceWorker.register('sw.js').then(function() {
	   	console.log("service worker is ready to work!");
	  });
	}

	if(!navigator.onLine){

		localforage.config({
		    name: 'PWAWorkshopDB'
		});

		var bookmark = {
			title: [],
			tnc: []
		};

		var titleTemplate 	= document.getElementsByClassName("promo_title")[0];
		var tncBeginTmplate	= document.getElementsByClassName("tnc_begin")[0];
		var tncTemplate 	= document.getElementsByClassName("tnc")[0];

		var container 	= document.getElementById("offline_content");
		var mainContent = document.getElementsByClassName("main_content");

		console.log("goint to hide mian content")
		for(var i = 0 ; i < mainContent.length ; i++){
			console.log("hiding main content")
			mainContent[i].setAttribute("hidden", "true");
		}

		container.removeAttribute("hidden");

		localforage.getItem('my_bookmark').then(function(result){
			bookmark = JSON.parse(result);
			for(var i = 0 ; i < bookmark.title.length; i++){

				var titleClone = titleTemplate.cloneNode(true);
				titleClone.removeAttribute('hidden');
				titleClone.innerHTML = bookmark.title[i];
				container.appendChild(titleClone);

				var tncBeginClone = tncBeginTmplate.cloneNode(true);
				tncBeginClone.removeAttribute("hidden");
				container.appendChild(tncBeginClone);

				var tncClone = tncTemplate.cloneNode(false);
				tncClone.removeAttribute("hidden");

				for(var j = 0 ; j < bookmark.tnc[i].length ; j++){
					console.log(bookmark.tnc[i][j]);
					var tncItem = document.createElement("li");
					tncItem.innerHTML = bookmark.tnc[i][j];
					tncClone.appendChild(tncItem);
				}
				container.appendChild(tncClone);
			}
		});
	}
	
})();