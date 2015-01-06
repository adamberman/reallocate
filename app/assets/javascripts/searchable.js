Backbone.Searchable = Backbone.Collection.extend({
	
	search: function (id) {
		return _(this.filter(function(model) {
			var name = model.get('name').split('');
			return name.indexOf(id) !== -1;
		}));
	}
})