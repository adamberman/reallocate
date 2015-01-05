Reallocate.Views.Flash = Backbone.View.extend({

	template: JST['auth/flash'],

	initialize: function (options) {
		this.messages = options.messages;
		this.flashClass = options.flashClass;
	},

	render: function () {
		var content = this.template({
			messages: this.messages,
			flashClass: this.flashClass
		});

		this.$el.html(content);
		return this;
	}
})