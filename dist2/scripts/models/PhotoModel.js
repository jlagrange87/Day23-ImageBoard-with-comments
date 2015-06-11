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
		var httpChecker = attr.photo.substring(0,7);
		var httpsChecker = attr.photo.substring(0,8);

		if(attr.comment.length === 0 || attr.photo.length === 0){
			return "*Both fields must not be empty";
		} 
		else if(httpChecker === "http://" || httpsChecker === "https://"){
		} 
		else {
			return "*Must begin with https:// or http://";
		}

		return false;
	},
	urlRoot: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo",
	idAttribute: "_id"
})