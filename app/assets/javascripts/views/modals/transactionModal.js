Reallocate.Views.TransactionModal = Backbone.View.extend({

	initialize: function (options) {
		// this.listenTo(this.model.bids(), 'add', this.render);
		if (options.transaction) {
			this.model = options.transaction;
			this._modelType = 'transaction';
		}
	},

	className: 'modal fade',

	template: JST['modals/transaction'],

	events: {
		'click button#submit-transaction': 'saveTransaction'
	},

	saveTransaction: function (event) {
		event.preventDefault();
		// if (this.model.get('transaction') || this._modelType == 'transaction') {
		// 	var params = $('form.new_transaction').val().serializeJSON();
		// 	if (this.model.get('transaction')) {
		// 		this.model.get('transaction').set(params);
		// 	} else {
		// 		if (this.model.get('hours') === params.transaction.hours)
		// 		params.transaction.status = 'Accepted'
		// 		this.model.set(params);
		// 	}
		// } else {
		// 	var params = {
		// 		transaction: {
		// 			listable_id: this.model.id,
		// 			listable_type: 'Request'
		// 		}
		// 	}
		// 	var transactionModel = new Reallocate.Models.Transaction(params);
		// 	this.model.transaction().set(transactionModel);
		// }
		var that = this;
		if (this._modelType == 'transaction') {
			this.model.save({}, {
				success: function (model, response) {
					alert('added');
				},
				error: function (model, response) {
					alert('error');
				}
			});
		} else {
			this.model.transaction().save({}, {
				success: function (model, response) {
					alert('added')
				},
				error: function (model, response) {
					alert('error')
				}
			});
		}
	},

	render: function () {
		var content = this.template({
			item: this.model
		});
		this.$el.html(content);
		return this;
	}
})