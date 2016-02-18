function addNewComment() {
	new_comment = $(".comment-input input").val();
	if (new_comment) {
		$(".comments").append("<p>" + new_comment + "</p>");
		$(".comments p:last-child").hide();
		$(".comments p:last-child").fadeIn();
		$(".comment-input input").val("").focus();
	}
};
var main = function () {
	var new_comment = "";
	$(".comment-input button").click(function () {
		addNewComment();
	});
	$(document).keydown(function(key) {
		if (parseInt(key.which, 10) === 13) {
			addNewComment();
		}
	});
};
$(document).ready(main);