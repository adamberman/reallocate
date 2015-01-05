Reallocate.Views.HomeSearch = Backbone.View.extend({

	className: 'search-wrapper'

	template: JST['home/search'],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})