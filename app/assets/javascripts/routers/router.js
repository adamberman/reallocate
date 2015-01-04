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
		var view = new TVBnB.Views.OpeningMain();
		this._swapView(view);
	},

	login: function () {

	},

	signup: function () {

	},

	_swapView: function (newView) {
		if (this._currentView) {
			this._currentView.remove();
		}

		this.$rootEl.html(newView.render().$el);
		this._currentView = newView;
	}
})