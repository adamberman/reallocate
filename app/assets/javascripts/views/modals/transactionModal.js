Reallocate.Views.TransactionModal = Backbone.View.extend({

	initialize: function () {
		// this.listenTo(this.model.bids(), 'add', this.render);
	},

	className: 'modal fade',

	template: JST['modals/transaction'],

	events: {
		'click button#submit-transaction': 'saveTransaction'
	},

	saveTransaction: function (event) {
		event.preventDefault();
		if (this.model.get('transaction')) {
			// update params attributes you want updated
		} else {
			var params = {
				transaction: {
					listable_id: this.model.id,
					listable_type: 'Request'
				}
			}
			var transactionModel = new Reallocate.Models.Transaction(params);
			this.model.transaction().set(transactionModel);
		}
		var that = this;
		this.model.transaction().save({}, {
			success: function (model, response) {
				alert('added')
			},
			error: function (model, response) {
				alert('error')
			}
		})
	},

	// submitBid: function (event) {
	// 	event.preventDefault();
	// 	var params = this.$('form.new-bid').serializeJSON();
	// 	params.bid.request_id = this.model.id;
	// 	params.bid.writer = 'User';
	// 	var newBid = new Reallocate.Models.Bid(params);
	// 	var that = this;
	// 	newBid.save({}, {
	// 		success: function (model, response) {
	// 			that.model.bids().add(response);
	// 			that.$('textarea#new-bid-info').val('');
	// 		},
	// 		error: function (model, response) {
	// 			alert('error!');
	// 		}
	// 	})
	// },

	render: function () {
		var content = this.template({
			item: this.model
		});
		this.$el.html(content);
		return this;
	}
})