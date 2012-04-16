// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function geoTweet() {
	if (google.loader.ClientLocation) {
		var lat = google.loader.ClientLocation.latitude;
		var lng = google.loader.ClientLocation.longitude;
	} else {
		var lat = false;
		var lng= false;
	}
	if(lat && lng){
  	var api = "077165503e104b34a726e55ee77b367a"
	  var url = "http://services.sunlightlabs.com/api/legislators.allForLatLong?apikey=" + api + "&latitude=" +lat+ "&longitude="+lng
	}

	$(document).ready(function() {
	    $.getJSON(url, function(data) {
	      //var items = []; 
	      var options = '';
	      $.each(data.response.legislators, function(i, legislator) {
	        if(legislator.legislator.twitter_id!=""){
	          var twitter = legislator.legislator.twitter_id
	          var name = legislator.legislator.title+" "+legislator.legislator.firstname+" "+legislator.legislator.lastname
	        }          
	        if(name && twitter){
	         // items.push({"name":name,"twitter":twitter})
	          options += '<option value="' + twitter + '">' + name + '</option>';
	        }
	      });
	      $("select#tweet_congress").html(options);
	  });
	});

}

geoTweet();