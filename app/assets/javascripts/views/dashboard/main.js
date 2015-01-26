Reallocate.Views.Dashboard = Backbone.CompositeView.extend({

	initialize: function () {
		this.addNavbar();
		this.listenTo(this.model, 'sync', this.render);
	},

	className: 'main',

	template: JST['dashboard/main'],

	events: {
		'click button.transaction': 'viewTransaction'
	},

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
	},

	viewTransaction: function(event) {
		event.preventDefault();
		var $transaction = $(event.currentTarget);
		var transactionId = $transaction.data('transactionid');
		var requestId = $transaction.data('requestid');
		var requests = this.model.requests();
		var request = requests.get(requestId);
		var transactions = request.transactions();
		var transaction = transactions.get(transactionId);
		var transactionModal = new Reallocate.Views.TransactionModal({
			transaction: transaction
		});
		this.addSubview('.modals', transactionModal);
		$('.modal').modal('show');
	},

	render: function () {
		var requests = Reallocate.currentUser.requests()
		var content = this.template({
			requests: requests
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
