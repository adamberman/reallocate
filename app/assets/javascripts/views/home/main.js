Reallocate.Views.HomeMain = Backbone.CompositeView.extend({

	initialize: function () {
		// add list
		// add search
	},

	className: 'main',

	template: JST['home/main'],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})