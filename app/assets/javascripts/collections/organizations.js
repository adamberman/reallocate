Reallocate.Collections.Organizations = Backbone.Collection.extend({

	model: Reallocate.Models.Organization,

	url: '/api/organizations',

	search: function (id) {
		return _(this.filter(function (model) {
			return model.get('name').include?(id);
		}));
	}
})