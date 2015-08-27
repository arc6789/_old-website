$(document).ready(function(){

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
}


function Skill(skillstring){
	var skillsarray;
	this.title = skillstring;
	this.skillsarray=[];
	this.funct = function(){
		for(var i in this.skillsarray){
			this.skillsarray[i] = " " +this.skillsarray[i];
		}
		return ($("aside").append('<div class="col-lg-6">'+'<p>'+ '<span style="font-weight:bold">'
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


});

