Reallocate.Views.LogIn = Backbone.CompositeView.extend({

	events: { 
		"submit #login-form": "handleLogin"
	},

	template: JST['auth/login-main'],

	className: 'login-wrapper',

	handleLogin: function (event) {
		event.preventDefault();
		var userParams = $(event.target).serializeJSON();
		var that = this;

		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: userParams,
			success: function (model, resp) {
				that.loginCurrentUser(model);
				Backbone.history.navigate('/home', { trigger: true });
			},
			error: function (model, resp) {
				that.addFlashErrors([model.responseJSON.message]);
			}
		});
	},

	loginCurrentUser: function (user) {
		Reallocate.currentUser.set(user);
	},

	addFlashErrors: function (errors) {
		var flashMessages = new Reallocate.Views.Flash({
			messages: errors,
			flashClass: 'alert-danger'
		})
		this.$('#flash-message').html(flashMessages.render().$el);
		this.$('input[type=password]').val('');
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})