Reallocate.Models.Request = Backbone.Model.extend({

	urlRoot: "/api/requests",

	bids: function () {
		if (!this._bids) {
			this._bids = new Reallocate.Collections.Bids([], { request: this });
		}
		return this._bids;
	},

	parse: function (response) {
		if (response.bids) {
			this.requests().set(response.bids, { parse: true });
			delete response.bids;
		}
		return response;
	}

})