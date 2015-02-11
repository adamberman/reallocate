Backbone.Searchable = Backbone.Collection.extend({
	
	search: function (params) {
		if (params === "") {
			return this;
		}
		return _(this.filter(function(model) {
			var name = model.get('name').toLowerCase();
			return new RegExp(params.toLowerCase()).test(name);
		}));
	}
})