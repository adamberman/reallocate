Reallocate.Views.OpeningMain = Backbone.View.extend({

	className: 'main',

	template: JST['opening/main'],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})