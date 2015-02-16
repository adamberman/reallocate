Reallocate.Views.HomeMain = Backbone.CompositeView.extend({

	initialize: function (options) {
		this._type = options.type;
		this.tags = options.tags;
		this.addNavbar();
		this.addIndex();
		this.addSearch();
	},

	className: 'main',

	template: JST['home/main'],

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
	},

	addIndex: function () {
		var index = new Reallocate.Views.HomeIndex({
			collection: this.collection,
			type: this._type
		});

		this.addSubview('#index', index);
	},

	addSearch: function () {
		var search = new Reallocate.Views.HomeSearch({
			collection: this.collection,
			tags: this.tags
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