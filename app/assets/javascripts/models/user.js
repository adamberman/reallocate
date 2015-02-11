Reallocate.Models.User = Backbone.Model.extend({

	urlRoot: "/api/users",

	requests: function () {
		if (!this._requests) {
			this._requests = new Reallocate.Collections.Requests([], { user: this });
		}
		return this._requests;
	},

	offers: function () {
		if (!this._offers) {
			this._offers = new Reallocate.Collections.Offers([], { user: this });
		}
		return this._offers;
	},

	respondedRequests: function () {
		if (!this._respondedRequests) {
			this._respondedRequests = new Reallocate.Collections.Transactions([], { user: this });
		}
		return this._respondedRequests;
	},

	respondedOffers: function () {
		if (!this._respondedOffers) {
			this._respondedOffers = new Reallocate.Collections.Transactions([], { user: this });
		}
		return this._respondedOffers;
	},

	parse: function (response) {
		if (response.requests) {
			this.requests().set(response.requests, { parse: true });
			delete response.requests;
		}
		if (response.offers) {
			this.offers().set(response.offers, { parse: true });
			delete response.offers;
		}
		if (response.respondedRequests) {
			this.respondedRequests().set(response.respondedRequests, { parse: true });
			delete response.respondedRequests;
		}
		if (response.respondedOffers) {
			this.respondedOffers().set(response.respondedOffers, { parse: true });
			delete response.respondedOffers;
		}

		return response;
	}
})