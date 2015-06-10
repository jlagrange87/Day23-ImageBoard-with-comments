var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
var ListPhoto = require('../models/PhotoModel.js');
module.exports = Backbone.Collection.extend({
	model: ListPhoto,
	url: "https://tiny-pizza-server.herokuapp.com/collections/josh-model-photo"
})