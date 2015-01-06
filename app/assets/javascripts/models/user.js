Reallocate.Models.User = Backbone.Model.extend({

	urlRoot: "/api/users",

	requests: function () {
		if (!this._requests) {
			this._requests = new Reallocate.Collections.Requests([], { user: this });
		}
		return this._requests;
	},

	parse: function (response) {
		if (response.requests) {
			this.requests().set(response.requests, { parse: true });
			delete response.requests;
		}
		return response;
	}
})