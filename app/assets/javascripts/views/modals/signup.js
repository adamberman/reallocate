Reallocate.Views.SignUp = Backbone.CompositeView.extend({

	events: { 
		"submit #signup-form": "handleSignup"
	},

	template: JST['auth/signup-main'],

	className: 'signup-wrapper',

	handleSignup: function (event) {
		event.preventDefault();
		var userParams = $(event.target).serializeJSON();
		var that = this;
		var user = new Reallocate.Models.User(userParams);

		user.save({}, {
			success: function (model, resp) {
				that.loginCurrentUser(model.attributes);
				Backbone.history.navigate('/home', { trigger: true });
			},
			error: function (model, resp) {
				that.addFlashErrors(resp.responseJSON);
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