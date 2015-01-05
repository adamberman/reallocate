Reallocate.Views.Index = Backbone.CompositeView.extend({

	initialize: function () {
		// eventually, search and filtering
		this.collection.each(function(organization){
			this.addOrganization(organization);
		}.bind(this));
		this.children = [];
	},

	className: 'index',

	template: JST['home/index'],

	addOrganization: function (organization) {
		var subview = new Reallocate.Views.IndexItem({
			model: organization
		});

		this.children.push(subview);
		this.addSubview('.organizations-container', subview);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})