'use strict';

(function(){
	localforage.config({
	    name: 'MyTestDB'
	});

	var bookmark = {
		title: [],
		tnc: []
	};

	var titleTemplate 	= document.getElementsByClassName("promo_title")[0];
	var tncBeginTmplate	= document.getElementsByClassName("tnc_begin")[0];
	var tncTemplate 	= document.getElementsByClassName("tnc_begin")[0];

	var container = document.getElementById("content");

	localforage.getItem('my_key').then(function(result){
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
})();