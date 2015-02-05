Reallocate.Views.UserOptions = Backbone.View.extend({

	template: JST['layouts/user-options'],

	tagName: 'ul',

	className: 'nav navbar-nav navbar-right',

	initialize: function () {
		this.listenTo(this.model, 'change', this.render);
	},

	render: function () {
		var content = this.template({
			user: this.model
		});
		this.$el.html(content);
		return this;
	}
})