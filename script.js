$(function () {
// Add the attached icon image before the text in each LI element in the main navigation
	$("#menu ul li a").prepend("<img src='icon.png'>");
// Clicking on the H1 element in the header changes the background color of the header DIV 
	$("#header h1").click(function(colorChangeEvent) {
		$("#header").css("backgroundColor", "aqua");
	});
// Change the text color of the first LI element in one of the sub-lists in the sidebar 
	$("#sidebar_content_1 li a:first").css("color", "red");
// Move the position of the even “numbered” LI elements in one of the sub-lists in the sidebar to the right by 5 pixels 
	$("#sidebar_content_2 li:even").css("margin-left", "5px");
// Clicking on one of the post titles in the main content area replaces the content of the content DIV (with the ID of “content”) with content you specify 
	$("h2.title").click(function(contentChangeEvent) {
		$("#content").replaceWith("<h2>Hi, there!</h2><p>Thanks for changing me!</p>");
	});
// Clicking on one of the H2 elements in the sidebar toggles visibility of the list below it (toggle)
	$("#sidebar_content_2 h2").click(function(toggleVisibilityEvent) {
		$("#sidebar_content_2 ul").toggle();
	});

// Week 10 code:	
	$("a").click(function(evt) {
		$(this).addClass("new-background");
	});

	$("h2.title").click(function(evt) {
		$(this).fadeOut(800, function() {

		});
	});	
});