Reallocate.Views.HomeSearch = Backbone.View.extend({

	initialize: function (options) {
		this.tags = options.tags;
	},

	className: 'search-wrapper',

	template: JST['home/search'],

	events: {
		'keydown #search': 'search',
		'change #tag': 'search'
	},

	search: function (event) {
		var name = $(event.currentTarget).val();
		var tag = $('#tag').val();
		var params = {
			name: name,
			tag: tag
		}
		this.collection.trigger('search', params);
	},

	render: function () {
		var content = this.template({
			tags: this.tags
		});
		this.$el.html(content);
		return this;
	}
})