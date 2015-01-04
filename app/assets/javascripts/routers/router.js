Reallocate.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "main"
		"login": "login",
		"signup": "signup"
	},

	// first view the site will hit
	main: function () {
		var view = new TVBnB.Views.OpeningMain();
		this._swapView(view);
	},

	// view for login
	login: function () {

	},

	// view for signup
	signup: function () {

	},

	// destroys old view, gets rid of zombie views (necessary for composite views)
	_swapView: function (newView) {
		if (this._currentView) {
			this._currentView.remove();
		}

		this.$rootEl.html(newView.render().$el);
		this._currentView = newView;
	}
})