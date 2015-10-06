app.controller('MainController', ['$scope', function($scope){
	$scope.title = 'Like & Love Buttons';

	$scope.likes= 0;
	$scope.loves = 0;

	$scope.likesOne = function(){
	$scope.likes++;
	};

	$scope.lovesOne = function(){
	$scope.loves++;
	// $(".fa-heart").addClass("happy:active");
	};


	$scope.design = [
	{ 	image: "./././img/all-icons.png",
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
}]);