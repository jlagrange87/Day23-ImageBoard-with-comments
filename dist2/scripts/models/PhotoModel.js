var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
module.exports = Backbone.Model.extend({
	defaults:{
		photo: null,
		comment: null,
		user_comment: null
	},
	validate: function(attr, options){
		if(attr.photo.length == 0  || attr.photo.indexOf("http://") !== 0){
			return "You must upload a photo in proper format!";
		}
		else{
			return false;
		}
	},
	urlRoot: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo",
	idAttribute: "_id"
})