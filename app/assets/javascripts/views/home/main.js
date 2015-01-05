Reallocate.Views.HomeMain = Backbone.CompositeView.extend({

	initialize: function () {
		this.addIndex();
		// add search
	},

	className: 'main',

	template: JST['home/main'],

	addIndex: function () {
		var index = new Reallocate.Views.HomeIndex({
			collection: this.collection
		});

		this.addSubview('#index', index);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})