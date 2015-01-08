Reallocate.Views.BidModal = Backbone.View.extend({

	className: 'modal fade',

	template: JST['modals/bid'],

	render: function () {
		var content = this.template({
			request: this.model
		});
		this.$el.html(content);
		return this;
	}
})