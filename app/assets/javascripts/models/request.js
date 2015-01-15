Reallocate.Models.Request = Backbone.Model.extend({

	urlRoot: "/api/requests",

	transaction: function () {
		if (!this._transaction) {
			this._transaction = new Reallocate.Models.Transaction({}, { request: this });
		}
		return this._transaction;
	},

	parse: function (response) {
		if (response.transaction) {
			this.transaction().set(response.transaction, { parse: true });
			delete response.transaction;
		}
		return response;
	}

})