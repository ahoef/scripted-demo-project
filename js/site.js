$(function() {
	console.log("JavaScript is working on this site! Cool!");




	//-----------------------------------------------------------------------------------
	// Output message based on screen size

	var screenSize = window.innerWidth;

	if (screenSize >= 1080) {
		var message = "It looks like you have a large-sized screen.";
	} else if (screenSize >= 768) {
		var message = "It looks like you have a medium-sized screen.";
	} else {
		var message = "It looks like you have a small-sized screen.";
	}

	var $screenSizeMessage = $("#screen-size-message");

	$screenSizeMessage.text(message);




	//-----------------------------------------------------------------------------------
	// Hide/show the additional opening paragraph text

	var $moreSummaryContent = $("#more-summary-content");
	var $seeMoreLink = $("#see-more-link");

	$seeMoreLink.on("click", function(e){
		e.preventDefault();
		$moreSummaryContent.show();
		$(this).hide();
	});



	//-----------------------------------------------------------------------------------
	// Button click count

	var $button = $("button");
	var $buttonCountMessage = $("#button-count");
	var buttonCount = 0;

	$button.on("click", function(e){
		buttonCount += 1;
		$buttonCountMessage.text(buttonCount);
	})




	//-----------------------------------------------------------------------------------
	// Slideshow

	var imagePaths = [
		"images/photo1.jpg",
		"images/photo2.jpg",
		"images/photo3.jpg",
		"images/photo4.jpg",
		"images/photo5.jpg",
		"images/photo6.jpg"
	];

	var currentIndex = 0;
	var currentImgPath;
	var $prevLink = $('#prev');
	var $nextLink = $('#next');


	function setImgPath() {
		currentImgPath = imagePaths[currentIndex];
		$('#image').attr('src', currentImgPath);
	}

	$prevLink.on("click", function(e) {
		e.preventDefault();

		if (currentIndex > 0) {
			currentIndex -= 1;
			setImgPath();
		}
	});

	$nextLink.on("click", function(e) {
		e.preventDefault();

		if ((currentIndex + 1) < imagePaths.length) {
			currentIndex += 1;
			setImgPath();
		}
	});



	//-----------------------------------------------------------------------------------
	// Back to top arrow circle

	var $arrowCircle = $('#arrow-circle');

	$arrowCircle.on("click", function(e){
		window.scrollTo(0,0);
	})
});