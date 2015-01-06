Reallocate.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "main",
		"login": "login",
		"signup": "signup",
		"home": "home",
		"home/organizations": "home",
		"home/requests": "requests"
	},

	// first view the site will hit
	main: function () {
		var view = new Reallocate.Views.OpeningMain();
		this._swapView(view);
	},

	// view for login
	login: function () {
		var view = new Reallocate.Views.LogIn();
		this._swapView(view);
	},

	// view for signup
	signup: function () {
		var view = new Reallocate.Views.SignUp();
		this._swapView(view);
	},

	// home page, which is also the search page for organizations, tasks, etc. For now, anyone can do everything, but eventually only logged in users will be able to do some things
	home: function () {
		var organizations = new Reallocate.Collections.Organizations();
		organizations.fetch()

		var view = new Reallocate.Views.HomeMain({
			collection: organizations,
			type: 'organization'
		});

		this._swapView(view);
	},

	requests: function () {
		var requests = new Reallocate.Collections.Requests();
		requests.fetch();

		var view = new Reallocate.Views.HomeMain({
			collection: requests,
			type: 'request'
		});

		this._swapView(view);
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