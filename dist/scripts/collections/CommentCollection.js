var CommentCollection = Backbone.Collection.extend({
	model: PhotoComment,
	url: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo-comments"
});