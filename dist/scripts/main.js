$(document).ready(function(){
	$("a.click-form").click(function() {
		var form = $(".dropdown-form");
		form.slideDown("slow");
	});
	$("#cancel").click(function(){
		$(".dropdown-form").slideUp("slow");

	})
	var PhotoList = new PhotoCollection();
	var CommentList = new CommentCollection()
	CommentList.fetch();
	PhotoList.fetch();
	var PhotoBuilder = _.template($("#photoTemplate").html());

	$("#photoSubmitForm").submit(function(e){
		e.preventDefault();
		var newPhoto = new ListPhoto({
			photo: $("#photoUpload").val(),
			comment: $("#photoComment").val(),
		});

		if(newPhoto.isValid()){
			PhotoList.add(newPhoto);
			newPhoto.save();
			$(".dropdown-form").slideUp("slow");
		}
		else {
			alert("NO!")
		}
	});
	PhotoList.on("add", function(model){
		var photoHtml = PhotoBuilder({model: model});
		$("#my-photos").append(photoHtml);
		$("."+model.cid).click(function(){
			$("#"+model.cid).slideDown("slow");

		})
		console.log(PhotoList)
		$(".comment-submission-"+model.cid).submit(function(e){
			e.preventDefault();
			var newComment = new PhotoComment({
				userComment: $("#"+model.cid).val(),
				photoId: model.id
			})
			$("#"+model.cid).slideUp("slow");
			CommentList.add(newComment);
			newComment.save();
			console.log(newComment.attributes.userComment)
		});

	});
	CommentList.on("add", function(model){
		var photoModel = PhotoList.get(model.get("photoId"));
		console.log(photoModel.id)
		$(".user-comments-"+photoModel.id).append("<li>"+model.get("userComment")+"</li>");
	});
});