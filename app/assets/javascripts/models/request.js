Reallocate.Models.Request = Backbone.Model.extend({

	urlRoot: "/api/requests",

	transaction: function () {
		if (!this._transaction) {
			this._transaction = new Reallocate.Models.Transaction({}, { request: this });
		}
		return this._transaction;
	},

	transactions: function() {
		if (!this._transactions) {
			this._transactions = new Reallocate.Collections.Transactions([], { request: this });
		}
		return this._transactions;
	},

	parse: function (response) {
		debugger;
		if (response.transaction) {
			this.transaction().set(response.transaction, { parse: true });
			delete response.transaction;
		}
		if (response.transactions) {
			this.transactions().set(response.transactions, { parse: true });
			delete response.transactions;
		}
		return response;
	}

})