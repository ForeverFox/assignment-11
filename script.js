$(function () {
// Add the attached icon image before the text in each LI element in the main navigation
	$("#menu li").prepend("<img src='icon.png'>");
// Clicking on the H1 element in the header changes the background color of the header DIV 
	$("#header h1").click(function(evt) {
		$("#header").css("backgroundColor", "darkblue");
	});
// Change the text color of the first LI element in one of the sub-lists in the sidebar 
	$("#sidebar_content_1 ul li a").css("color", "red"); // NEEDS WORK
// Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels 
	$("#sidebar_content_2 li:even").css("margin-left", "5px");
});

/*

// Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify (click event, replaceAll)
// Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it (toggle)

*/


/* Assignment 10 code:

$("document").ready(function() {
	$("a").click(function(evt) {
		$(this).addClass("new-background");
	});

	$("h2.title").click(function(evt) {
		$(this).fadeOut(800, function(){

		});
	});
});

*/