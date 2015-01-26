Reallocate.Views.Dashboard = Backbone.CompositeView.extend({

	initialize: function () {
		this.listenTo(this.model, 'sync', this.render);
	},

	className: 'main',

	template: JST['dashboard/main'],

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
