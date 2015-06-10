var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
module.exports = Backbone.Model.extend({
	defaults: {
		userComment: null,
		photoId: null
	},
	validate: function(attr, options){
		if(attr.userComment.length == 0){
			return "You must input a comment";
		}
		else{
			return false;
		}
	},
	urlRoot: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo-comments",
	idAttribute: "_id"
});