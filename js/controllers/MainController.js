// var app = angular.module("myApp", []);
app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Like & Love Buttons';

	$scope.likes= 0;
	$scope.loves = 0;

    //Counter for my button clicks. To be implemented at some point...
	$scope.likesOne = function(){
	$scope.likes++;
	};

	$scope.lovesOne = function(){
	$scope.loves++;
	};
   
   //To use with my development section

		$scope.development=[
	{

	},
	{

	},
	{

	},
	{

	}
	]

   // To use with ng-repeat for my design section
	$scope.design = [
	{ 	
		image: "./././img/all-icons.png",
		title: "Flat Icons",
		description:"Girl Develop It Icons",
		modalTarget:"#flaticonsModal",
		imgClass:"gdi-flaticons-class",

	},
	{
		image: "./././img/Hybrid.png",
		title: "Hybrid Point Logo",
		description: "Graphic Logo Design",
		modalTarget:"#hybridlogo",
		imgClass:"hybrid-logo-class",
	},
	{
		image: "./././img/psap-crop.png",
		title: "Hybrid Point UI",
		description: "UX/UI Design Mockup",
		modalTarget:"#hybridpointModal",
		imgClass:"hybridpoint-ui-class",

	}
	];

	// To use with ng-repeat for my design bootstrap modal section
	$scope.modal=[
	{	
		modalSectionClass:"flat-icons-modal",
		thisId:"flaticonsModal",
		headerTitle: "Flat Icons",
		imageDivCol:"col-lg-8 col-lg-offset-2",
		image:"./././img/all-icons.png",
		descTitle:"Flat Icon Design",
		description:"Flat icons designed for Girl Develop it -San Jose Chapter website. The icon in the middle is the official Girl Develop it icon",
		tools:"Tools: Adobe Illustrator/Photoshop",
		imgBootClass:"img-responsive center-block",
	},
	{
		modalSectionClass:"hybrid-logo",
		thisId:"hybridlogo",
		headerTitle: "Hybrid Point Logo",
		imageDivCol:"col-lg-4 col-lg-offset-4",
		image:"./././img/Hybrid.png",
		descTitle:"Graphic Logo Design",
		description:"Logo Design for Hybrid Point Technology, for hybrid location solutions. Design based on previous projects",
		tools:"Tools: Adobe Illustrator/Photoshop",
		imgBootClass:"img-responsive center-block",
	},
	{	
	 	modalSectionClass:"hybrid-point-modal",
		thisId:"hybridpointModal",
		headerTitle: "HYBRID POINT UI",
		imageDivCol: "col-lg-12",
		image:"./././img/PSAP_UI_3-latesttt1.png",
		descTitle:"UX/UI Design",
		description:"This is a very similar mockup I designed for a geolocation software development company I interned at. Each element in this UI has been designed by me except for the Google Map.",
		tools:"Tools: Adobe Illustrator/Photoshop, GIMP",
		imgBootClass:"design img-responsive center-block img-thumbnail",
	},
	];

}]); 