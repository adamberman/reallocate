Reallocate.Views.Dashboard = Backbone.CompositeView.extend({

	initialize: function () {
		this.addNavbar();
		this.listenTo(this.model, 'sync', this.render);
	},

	className: 'main',

	template: JST['dashboard/main'],

	events: {
		'click button.transaction': 'viewTransaction',
		'click button.transaction-pay': 'payTransaction'
	},

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
	},

	viewTransaction: function (event) {
		event.preventDefault();
		var $transaction = $(event.currentTarget);
		var transactionId = $transaction.data('transactionid');
		
		if ($transaction.data('requestid')) {
			var requestId = $transaction.data('requestid');
			var requests = this.model.requests();
			var request = requests.get(requestId);
			var transactions = request.transactions();
		} else {
			var offerId = $transaction.data('offerid');
			var offers = this.model.offers();
			var offer = offers.get(offerId);
			var transactions = offer.transactions();
		}
		
		var transaction = transactions.get(transactionId);
		var transactionModal = new Reallocate.Views.TransactionModal({
			model: transaction
		});
		this.addSubview('.modals', transactionModal);
		$('.modal').modal('show');
	},

	payTransaction: function (event) {
		event.preventDefault();
		var $transaction = $(event.currentTarget);
		var transactionId = $transaction.data('transactionid');

		if ($transaction.data('requestid')) {
			var requestId = $transaction.data('requestid');
			var requests = this.model.requests();
			var request = requests.get(requestId);
			var transactions = request.transactions();
		} else {
			var offerId = $transaction.data('offerid');
			var offers = this.model.offers();
			var offer = offers.get(offerId);
			var transactions = offer.transactions();
		}
		
		var transaction = transactions.get(transactionId);
		transaction.save({
			status: 'Paid'
		}, {
			success: function (model, response) {
				alert('paid');
			},
			error: function (model, response) {
				alert('error');
			}
		});
	},

	render: function () {
		var requests = Reallocate.currentUser.requests()l
		var offers = Reallocate.currentUser.offers();
		var content = this.template({
			user: this.model,
			requests: requests,
			offers: offers
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
