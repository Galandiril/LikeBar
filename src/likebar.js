function likebar(){

	var data = [];
	//var back = [];

	//css change
	//$(".video-extras-sparkbar-dislikes").css("background-color","red");
	$("<style type='text/css'>.video-extras-sparkbar-dislikes{background-color:red}</style>").appendTo( $("head") );

	var items = $(".context-data-item");
	var a = items.find(".yt-uix-tile-link");

	if( !items.length ){
		console.log("no links on the page");
		return;
	}

	if( a.length  !== items.length ){
		console.log("arrays a and item aren't even");
		return;
	}

	for( var i = 0, len = a.length; i < len; i++ ){
		data[i] = {
			link: "http://www.youtube.com" + a.eq(i).attr('href'),
			item: items.eq(i),
			temp: $("<div>")
		};
	}

	$.each(data, function(i, e){

		var link = e["link"];
		var item = e["item"];
		var temp = e["temp"];

		temp.load(link + " #watch7-views-info", function(){
			//console.log("link nr " + i + " " + link + " ended in success");

			var bar = temp.find(".video-extras-sparkbars");

			if( !bar.length ){
				var up = $('<div style="width: 0%">').addClass("video-extras-sparkbar-likes");
				var down = $('<div style="width: 100%;">').addClass("video-extras-sparkbar-dislikes");
				bar = $("<div>").addClass("video-extras-sparkbars").append( up ).append( down );
			}

			var viewCount = temp.find(".watch-view-count");
			var likes = temp.find(".video-extras-likes-dislikes");
			item.append(bar);

/*			back[i] = {
				bar: bar, 
				viewCount: viewCount,
				likes: likes
			}*/
		});
	});
}
