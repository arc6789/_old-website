
$(document).ready(function(){
		
	//MINIMIZE TABLE
	$('#minimize').click(function() {
		$('#divtopArea').animate({height:"650px"});
		$('#contain').animate({fade:'fast',height:'0', speed:'fast'});
		// $('#mid').animate({width:"80%", margin:"0 auto 0 auto", speed:'slow'});
		$('footer').animate({height:"10px"});
	});
	
	//MAXIMIZE TABLE
	$('#maximize').click(function() {
		$('#divtopArea').animate({height:"523px"});
		$('#contain').animate({fade:'fast',height:'20%', speed:'fast'});
		$('footer').animate({height:"0.7%"});
	});
	
	// CHECKBOXES
	$('#ch').click(function(){
 		if (!this.checked) {
        	$(':checkbox').each(function(){ 
        		this.checked = false; 
        	});
    	}
    	else if (this.checked) {
        	$(':checkbox').each(function() { 
        		this.checked = true; 
        	});
    	}
	});
	
	//COMPANY TITLE ANIMATION AND CLICK	
  	$(".company").hover(
  		function(){
		$('.company').css({"font-style":"normal","font-weight":"normal","font-size":"20px"});
		}, 
 		function(){
 		$('.company').css({"font-style":"italic"});
		}
	);		
	
	// MAPTOOLS SLIDE DOWN
	$(".maptools").mouseenter(function(){
		$('.pop-up').hide();
		$('.locationsettings').css({color:"#282828"});
  		$('.locationtool').css({background:"none"});
  		$('.locationtool').removeClass("jqmaptools");
	 	$('.popbutton').css({color:"white"});
	 	$('.maptools').css({background:"#787d83"});
	 	$('.maptools').addClass("jqmaptools");
	 	$('.arrow-up:nth-of-type(2)').show();
	 	$('.arrow-up:nth-of-type(1)').hide();
		$('.popup').slideDown();
  	});
	
	$(".popup").mouseleave(function(an){
  		$('.popbutton').css({color:"#282828"});
  		$('.maptools').css({background:"none"});
  		$('.popup').hide();
  		$('.maptools').removeClass("jqmaptools");
  			$('.arrow-up:nth-of-type(2)').hide();
  	});

  	//LOCATION TOOL SLIDE DOWN
	$(".locationtool").mouseenter(function(){
  		$('.popup').hide();
  		$('.maptools').removeClass("jqmaptools");
  		$('.popbutton').css({color:"#282828"});
  		$('.maptools').css({background:"none"});
  		$('.locationsettings').css({color:"white"});
	 	$('.locationtool').css({background:"#787d83"});
	 	$('.locationtool').addClass("jqmaptools");
	 	$('.arrow-up:nth-of-type(1)').show();
	 	$('.arrow-up:nth-of-type(2)').hide();
		$('.pop-up').slideDown();
  	});
  		
  	$(".pop-up").mouseleave(function(){
  		$('.locationsettings').css({color:"#282828"});
  		$('.locationtool').css({background:"none"});
  		$('.pop-up').hide();
  		$('.locationtool').removeClass("jqmaptools");
  		$('.arrow-up:nth-of-type(1)').hide();
  		
  	});

  	//START TOOL CLICK
  	 $("#start").click(function(){
	 	 $('.startool').toggleClass("jqmaptools");
	 	 myFunction();
 	 });

	// Start Hover    
	$( "a#start" ).hover(
		function() {
		$( this ).css( {"color":"white"} );
		},
		function(){
		$( this ).css( {"color":"black"} );
		}
		);
	});
	

//FUNCTION TO CHANGE START STRING WHEN STRING CLICKED		
function myFunction() {

    	var str = document.getElementById("start").innerHTML; 
    	if(str=="Start"){
    	var txt = str.replace("Start","Stop");
    	document.getElementById("start").style.color = "white"; 
    	// document.removeClass.('start:hover');
    	// $("#start").off("hover");
    	}
    	else if(str=="Stop"){
    	var txt = str.replace("Stop","Start");
    	document.getElementById("start").style.color = "black";
    	// $("#start").off("hover");
    	}
    	document.getElementById("start").innerHTML = txt;

		
		};

// GET CHECKBOX VALUE FOR SENSOR(S)

function getSettings(){

	var gps = document.getElementById("gps").checked;
	var wifi = document.getElementById("wifi");
	var net = document.getElementById("network");
	var baro = document.getElementById("barometer");
	var s;
	var sensor = [gps, wifi, net, baro];
}	  		 		


//FUNCTION FOR INITIALIZING GOOGLE MAPS AND ITS SETTINGS
var map; 

var service;
var infowindow;

function initialize() {
	var myLatlng = new google.maps.LatLng(39.8282, -98.5795);
	var mapOptions = {
	    zoom: 4,
	    center: myLatlng,
	    mapTypeId: google.maps.MapTypeId.RoadMap,
	            mapTypeControlOptions: {
	                mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.TERRAIN, google.maps.MapTypeId.HYBRID , google.maps.MapTypeId.SATELLITE] 
	            }
	  };
	map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
	google.maps.event.addListener(map, 'click', function(event) {
		placeMarker(event.latLng);
		var tex= document.getElementById("device").value;
		if(tex==""){
		    alert("You forgot to enter a Device Id! Please enter a Device Id under Map Tools.");
		};
	});

	// function tableRow{

		
	// }


	//FUNCTION FOR DYNAMICALLY GENERATING TABLE ROWS 
	var strin = document.getElementById("start").innerHTML; 
	function placeMarker(location) {
		var marker = new google.maps.Marker({
	  		position: location,
	      		draggable:true,
	      		map: map,
	 	});
		    
		 var table = document.getElementById("myTable");
		 var devId = document.getElementById("device").value;
		 var x = document.createElement("INPUT");
		 x.setAttribute("type", "checkbox");
	    		 
		var row = table.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		//var cell7= row.insertCell(6)
		cell4.innerHTML = location.lng().toFixed(4);
		cell3.innerHTML = location.lat().toFixed(4);
		cell2.innerHTML = Date().slice(0,25);
		cell1.innerHTML = devId;
		cell5.innerHTML= ("NOT AVAILABLE");
		cell6.innerHTML= 'GPS+WIFI+NET+BARO'; /* NOTE: In reality sensor output would be handled on server end*/
		// cell1.appendChild(x);
		
			if (document.getElementById("myTable").rows.length>12) {
				table.deleteRow(12);
			}
	         	//  x=(location.lat());
		  	// addRowToTable(x);
		 	// map.setCenter(location);
	}



	
}


 google.maps.event.addDomListener(window, 'load', initialize);

