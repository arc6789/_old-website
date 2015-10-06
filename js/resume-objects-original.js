$(document).ready(function(){

/**** HEADER SECTION ****/
var info = {
	website:"www.anusuyachoudhury.com",
	email:"anusuyarc89@gmail.com",
	phonenumber:"(510) 364-0949",
	locationn:"Fremont, CA",

};
var headerstring;
for (var i in info){
	headerstring='<div class="col-lg-3">'+'<h4>'+info[i]+'</h4>'+'</div>';
	$("header").append(headerstring);

	//header.append().addClass()
}

/**** SKILLS SECTION ****/
function Skill(skillstring){
	var skillsarray;
	this.title = skillstring;
	this.skillsarray=[];
	this.funct = function(){
		for(var i in this.skillsarray){
			this.skillsarray[i] = " " +this.skillsarray[i];
		}
		return ($(".skills").append('<div class="col-lg-6">'+'<p>'+ '<span style="font-weight:bold">'
			+this.title +'</span>'+ ": " +this.skillsarray+ '</p>' + '</div' ));
	};

}

var programming = new Skill("Programming");
programming.skillsarray = ["HTML5", "CSS3", "Sass", "Bootstrap", "Foundation", "C", "Python", "SQL", "MATLAB", "JavaScript/jQuery/JSON/AJAX"];
programming.funct();

var tools = new Skill("Tools");
tools.skillsarray = ["Developer Tools", "Version Control (Git/SVN)", "Google Maps API", "Mapbox Studio", "Gulp", "WordPress", "Drupal", "Arduino"];
tools.funct();

var operatingsystems = new Skill("Operatingsystems"); 
tools.skillsarray = ["Windows", "Mac OS", "Linux"];
tools.funct();

var design = new Skill("Design");
design.skillsarray = ["Adobe Photoshop/Illustrator", "GIMP", "InVision"];
tools.funct();



/*** DEVELOPMENT EXPERIENCE ***/

function devExperience(company, locat, dates, desc){
  this.company = company;
  this.locat = locat;
  this.dates = dates;
  this.desc= desc;




  this.devfunct = function(){
  	// for(var i in this.company){
			this.company = this.company+","+"         ";
		// };
  

     return ($(".experience").append('<div class="col-lg-12">'+ '<p>'+this.company+ " " + this.locat + this.dates+'</p>'+'</div>'));
  };

  this.devfunctt=function(){


  	return ($('<br/><p>'+this.desc+'</p>'));
  };



};

var independantDev = new devExperience("Independent Front End Developer","","December 2014 – Present", "hi");
independantDev.devfunct();
independantDev.devfunctt();



var polaris = new devExperience("Polaris Wireless, Inc.", "Mountain View, CA", "May 2014 – October 2014");

polaris.devfunct();

var scu = new devExperience("Santa Clara University", "Santa Clara, CA", "September 2011 – June 2012");
scu.devfunct();




// var str = "I have a cat; a dog; and a goat.";
// var mapObj = {
//    "cat":"dog",
//    "dog":"goat",
//    "goat":"cat",
//    ";": '</n>',

// };
// var re = new RegExp(Object.keys(mapObj).join("|"),"gi");

// str = str.replace(re, function(matched){


//   return mapObj[matched];
// });

// console.log((str));




});

