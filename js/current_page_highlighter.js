$(function(){
	$('.nav-pills li a').each(function() {
		if ($(this).prop('href') == window.location.href) {
			$(this).parent('li').addClass('active');
		}
	});
});

$(function(){
	if (window.location.href.substr(window.location.href.lastIndexOf("/")+1) == "index.php") {
		$('.nav-pills li:first-child').addClass('active');
	}
});