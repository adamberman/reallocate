Reallocate.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "main",
		"login": "login",
		"signup": "signup",
		"dashboard": "dashboard",
		"requests/new": "newRequest",
		"offers/new": "newOffer",
		"home": "home",
		"home/organizations": "home",
		"home/requests": "requests",
		"home/offers": "offers"
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

	dashboard: function () {
		Reallocate.currentUser.fetch();
		var view = new Reallocate.Views.Dashboard({
			model: Reallocate.currentUser
		});
		this._swapView(view);
	},

	newRequest: function () {
		var view = new Reallocate.Views.NewRequest();
		this._swapView(view);
	},

	newOffer: function () {
		var view = new Reallocate.Views.NewOffer();
		this._swapView(view);
	},

	// home page, which is also the search page for organizations, tasks, etc. For now, anyone can do everything, but eventually only logged in users will be able to do some things
	home: function () {
		var organizations = new Reallocate.Collections.Organizations();
		organizations.fetch()

		var view = new Reallocate.Views.HomeMain({
			collection: organizations,
			type: 'Organization'
		});

		this._swapView(view);
	},

	requests: function () {
		var requests = new Reallocate.Collections.Requests();
		requests.fetch();

		var view = new Reallocate.Views.HomeMain({
			collection: requests,
			type: 'Request'
		});

		this._swapView(view);
	},

	offers: function () {
		var offers = new Reallocate.Collections.Offers();
		offers.fetch();

		var view = new Reallocate.Views.HomeMain({
			collection: offers,
			type: 'Offer'
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