Reallocate.Views.HomeIndex = Backbone.CompositeView.extend({

	initialize: function () {
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
		if (id == '') {
			this._filteredOrganizations = this.collection;
		} else {
			this._filteredOrganizations = this.collection.search(id);
		}
		this.renderFilteredOrganizations();
	},

	renderFilteredOrganizations: function () {
		this._filteredOrganizations.each(this.addOrganization.bind(this));
		this.render();
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})