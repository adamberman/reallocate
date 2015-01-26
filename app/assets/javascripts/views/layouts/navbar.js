Reallocate.Views.Navbar = Backbone.CompositeView.extend({

	initialize: function () {
		this.addUserOptions();
	},

	template: JST['layouts/navbar'],

	events: {
		'a.logout': 'logoutUser'
	},

	addUserOptions: function () {
		var userOptions = new Reallocate.Views.UserOptions();
		this.addSubview('#navbar-user-collapse', userOptions);
	},

	logoutUser: function () {
		$.ajax({
			url: '/api/session',
			type: 'DELETE',
			success: function (model, resp) {
				Reallocate.currentUser.clear();
				Backbone.history.navigate('', { trigger: true })
			}
		})
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})