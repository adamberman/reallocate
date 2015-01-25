Reallocate.Views.Dashboard = Backbone.CompositeView.extend({

	className: 'main',

	template: JST['dashboard/main'],

	render: function() {
		var content = this.template({
			requests: Reallocate.curretUser.requests()
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})
