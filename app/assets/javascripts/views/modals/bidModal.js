Reallocate.Views.BidModal = Backbone.View.extend({

	className: 'modal fade',

	template: JST['modals/bid'],

	events: {
		'click button#submit-bid': 'submitBid'
	},

	submitBid: function (event) {
		event.preventDefault();
		formValues = this.$('form.new-bid').serializeJSON();
	},

	render: function () {
		var content = this.template({
			request: this.model
		});
		this.$el.html(content);
		return this;
	}
})