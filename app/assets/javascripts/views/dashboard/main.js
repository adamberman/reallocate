Reallocate.Views.Dashboard = Backbone.CompositeView.extend({

	initialize: function () {
		this.addNavbar();
		this.listenTo(this.model, 'sync', this.render);
	},

	className: 'main',

	template: JST['dashboard/main'],

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
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
