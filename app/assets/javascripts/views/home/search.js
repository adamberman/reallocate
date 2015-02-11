Reallocate.Views.HomeSearch = Backbone.View.extend({

	className: 'search-wrapper',

	template: JST['home/search'],

	events: {
		'keydown #search': 'search'
	},

	search: function (event) {
		var params = $(event.currentTarget).val();
		this.collection.trigger('search', params);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})