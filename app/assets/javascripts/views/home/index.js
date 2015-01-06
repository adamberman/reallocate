Reallocate.Views.HomeIndex = Backbone.CompositeView.extend({

	initialize: function () {
		this.listenTo(this.collection, 'search', this.search);
		this.listenTo(this.collection, 'sync', this.addAll);
		this.children = [];
	},

	className: 'index',

	template: JST['home/index'],

	addItem: function (item) {
		var subview = new Reallocate.Views.IndexItem({
			model: item
		});

		this.children.push(subview);
		this.addSubview('#organizations-container', subview);
	},

	deleteItem: function (item) {
		this.removeSubview('#organizations-container', item)
		var index = this.children.indexOf(item);
		this.children.slice(index, 1);
	},

	addAll: function () {
		this.collection.each(function (item) {
			this.addItem(item);
		}.bind(this));
	},

	deleteAll: function () {
		this.children.forEach(function (item) {
			this.deleteItem(item);
		}.bind(this));
	},

	search: function (id) {
		this.deleteAll();
		if (id == '') {
			this._filteredList = this.collection;
		} else {
			this._filteredList = this.collection.search(id);
		}
		this.renderFilteredOrganizations();
	},

	renderFilteredOrganizations: function () {
		this.filteredList.each(this.addItem.bind(this));
		this.render();
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})