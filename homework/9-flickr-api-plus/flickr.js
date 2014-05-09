$(document).ready(function() {

	$('#search-button').click(function() {

		$("#result-photos").html("");
		$("#result-header").text("");

		var query = $('#query').val();

		var flickrApiUrl = "https://api.flickr.com/services/rest/" +
			"?method=flickr.photos.search" +
			"&api_key=1c9f777eb7446f34a7261dc1a54be4b2" +
			"&tags=" + query +
			"&has_geo=1" +
			"&extras=geo" +
			"&format=json" +
			"&jsoncallback=?";

		$.getJSON(flickrApiUrl, processPictures);

	});

	function processPictures(data) {
		
		$("#result-header").text("Photos:")

		var firstPhoto = data.photos.photo[0];
		// http://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
		var imageUrl = "https://farm8.staticflickr.com/7356/14162121513_dd630921d9.jpg";
		var imageHtmlElement = "<img src='" + imageUrl + "' />";

		$("#result-photos").append(imageHtmlElement);
	}
});