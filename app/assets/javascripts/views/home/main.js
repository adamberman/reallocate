Reallocate.Views.HomeMain = Backbone.CompositeView.extend({

	initialize: function (options) {
		this._type = options.type;
		this.addIndex();
		this.addSearch();
	},

	className: 'main',

	template: JST['home/main'],

	addIndex: function () {
		var index = new Reallocate.Views.HomeIndex({
			collection: this.collection
		});

		this.addSubview('#index', index);
	},

	addSearch: function () {
		var search = new Reallocate.Views.HomeSearch({
			collection: this.collection
		});
		this.addSubview('#search', search);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})