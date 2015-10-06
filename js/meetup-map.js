
$(document).ready(function(){
      L.mapbox.accessToken = 'pk.eyJ1IjoiYXJjNjc4OSIsImEiOiIyUU9lcmdJIn0.nZKA7rHTaVFz-M2oTt2ZMA';
      var map = L.mapbox.map('map', 'arc6789.78f63ca4').setView([37.7833, -122.4167], 16);  /*examples.map-i86nkdio*/ 
  

  


      var MEETUP_URL = "http://api.meetup.com/2/events?key=d30645f3c726b341f2a6614d4f4b37&offset=0&format=json&limited_events=False&group_urlname=Women-Who-Code-SF&sign=true&photo-host=public&page=20&fields=&order=time&desc=false&status=upcoming&callback=";


/*30645f3c726b341f2a6614d4f4b37 my key*/
/*547995146f21675d2a7e111f665777 gdi key*/
/*fb141cn8ck7e0mhue5i3qs1010   oauthkey*/


      function convert(epoch){
          var epoch;
          var myDate = new Date(epoch);
          return myDate.toLocaleString();

      } 
      
       
      

      $.ajax({

          url: MEETUP_URL,
          type: "GET",
          dataType: 'jsonp',
          cache: false,
          success: function(response){                      
              var htmlString = "";
        
              $.each(response.results, function (i, item) {

                  var mgeojson = L.mapbox.featureLayer({
                    type: 'Feature',
                    geometry: {
                        type: 'Point',
                        // coordinates here are in longitude, latitude order because
                        // x, y is the standard for GeoJSON and many formats
                        coordinates: [
                          item.venue.lon,
                          item.venue.lat
                        ]
                    },
                    properties: {
                        title: item.venue.name,
                        description: item.venue.address_1,
                        'marker-size': 'small',
                        'marker-color': '#f95a61', /*#f95a61 #BE9A6B*/
                        // 'marker-symbol': 'cafe',
                    }
                        
                  })

                  mgeojson.addTo(map);
                  htmlString += '<h5><a href=\"www.google.com\"' + item.link + '" target="_blank">' + item.name + '</a></h5>';
                  htmlString += '<p> Address: ' + item.venue.address_1 + '</br></p>' ;
                  // htmlString += 'lon ' + item.venue.lon + ' lat ' + item.venue.lat + "<br/>";
                  htmlString += '<p>'+ convert(item.time)+'</br></p>';
                  // htmlString += '<button> Click this</button>'; 
                  htmlString += '<hr>';

                  $("ol").append(htmlString);
                  htmlString="";
                  
                  // console.log(response.results, i, item );


              }); /* end of .each item*/
              

              

                   
              
           } /*end of sucess response*/
 
      }); /*ajax request ends */






});




