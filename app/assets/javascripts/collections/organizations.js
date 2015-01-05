Reallocate.Collections.Organizations = Backbone.Collection.extend({

	model: Reallocate.Models.Organization,

	url: '/api/organizations',

	search: function (id) {
		return _(this.filter(function(model) {
			var name = model.get('name').split('');
			return name.indexOf(id) !== -1;
		}));
	}
})