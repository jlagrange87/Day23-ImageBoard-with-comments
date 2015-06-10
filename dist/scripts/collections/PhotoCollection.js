var PhotoCollection = Backbone.Collection.extend({
	model: ListPhoto,
	url: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo"
})