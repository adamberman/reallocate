Reallocate.Views.Dashboard = Backbone.CompositeView.extend({

	className: 'main',

	template: JST['dashboard/main'],

	render: function() {
		var requests = Reallocate.currentUser.requests()
		var content = this.template({
			requests: requests
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
