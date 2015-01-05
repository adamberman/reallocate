Reallocate.Views.HomeIndex = Backbone.CompositeView.extend({

	initialize: function () {
		// eventually, search and filtering
		this.listenTo(this.collection, 'search', this.search);
		this.listenTo(this.collection, 'sync', this.addAll);
		this.children = [];
	},

	className: 'index',

	template: JST['home/index'],

	addOrganization: function (organization) {
		var subview = new Reallocate.Views.IndexItem({
			model: organization
		});

		this.children.push(subview);
		this.addSubview('#organizations-container', subview);
	},

	addAll: function () {
		this.collection.each(function (item) {
			this.addOrganization(item);
		}.bind(this));
	},

	deleteAll: function () {
		this.children.forEach(function (item) {
			this.removeSubview('#organizations-container', item)
		}.bind(this));
	},

	search: function (id) {
		this.deleteAll();
		this._filteredOrganizations = this.collection.search(id);
		this.renderFilteredOrganizations();
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})