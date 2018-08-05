'use strict';

(function(){

	localforage.config({
	    name: 'PWAWorkshopDB'
	});

	var bookmark = {
		title: [],
		tnc: []
	};

	/*localforage.getItem('my_key').then(function(result){
		bookmark = JSON.parse(result);
		for(var i = 0 ; i < bookmark.title.length; i++){
			console.log(bookmark.title[i]);
			for(var j = 0 ; j < bookmark.tnc[i].length ; j++){
				console.log(bookmark.tnc[i][j]);
			}
		}
	});*/

	var bookmarkBtn = document.getElementById("bookmark_star");
	bookmarkBtn.addEventListener("click", function(){
		bookmarkBtn.src = "../assets/bookmark_star_checked.png";

		var ul      = document.getElementsByClassName("tnc")[0];
		var items   = ul.getElementsByTagName("li");

		var rawVal  = [];
		for(var i = 0 ; i < items.length ; i++){
			rawVal.push(items[i].innerHTML);
		}

		bookmark.tnc.push(rawVal);

		var promoTitle = document.getElementsByClassName("promo_title")[0].innerHTML;
		bookmark.title.push(promoTitle);

		localforage.setItem('my_bookmark', JSON.stringify(bookmark)).then(function(value){
			console.log(value);
		});		
	});
})();