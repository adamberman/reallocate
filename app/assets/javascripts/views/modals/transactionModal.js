Reallocate.Views.transactionModal = Backbone.View.extend({

	initialize: function () {
		// this.listenTo(this.model.bids(), 'add', this.render);
	},

	className: 'modal fade',

	template: JST['modals/transaction'],

	events: {
		'click button#create-transaction': 'createTransaction'
	},

	createTransaction: function (event) {
		event.preventDefault();
		var params = 
		var newTransaction = new Reallocate.Models.Transaction(params);
		var that = this;
		newTransaction.save({}, {
			success: function(model, response) {
				
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
			request: this.model
		});
		this.$el.html(content);
		return this;
	}
})