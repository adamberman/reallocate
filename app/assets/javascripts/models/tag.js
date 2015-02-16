Reallocate.Models.Tag = Backbone.Model.extend({

	urlRoot: "/api/tasks",

	transactions: function() {
		if (!this._transactions) {
			this._transactions = new Reallocate.Collections.Transactions([], { request: this });
		}
		return this._transactions;
	},

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

	parse: function (response) {
		if (response.transactions) {
			this.transactions().set(response.transactions, { parse: true });
			delete response.transactions;
		}
		if (response.requests) {
			this.requests().set(response.requests, { parse: true });
			delete response.requests;
		}
		if (response.offers) {
			this.offers().set(response.offers, { parse: true });
			delete response.offers;
		}
		return response;
	}

})