Reallocate.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "main"
		"login": "login",
		"signup": "signup"
	},

	main: function () {

	},

	login: function () {

	},

	signup: function () {
		
	}
})