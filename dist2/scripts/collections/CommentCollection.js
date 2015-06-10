var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var PhotoComment = require('../models/CommentModel.js');
module.exports = Backbone.Collection.extend({
	model: PhotoComment,
	url: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo-comments"
});