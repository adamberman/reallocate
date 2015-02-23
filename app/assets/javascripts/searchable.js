Backbone.Searchable = Backbone.Collection.extend({
	
	search: function (params) {
		if (params.name === "" && params.tag === "") {
			return this;
		}

		if (params.tag === "") {
			return _(this.filter(function (model) {
				var name = model.get('name').toLowerCase();
				return new RegExp(params.name.toLowerCase()).test(name);
			}));
		}

		if (params.name === "") {
			return _(this.filter(function (model) {
				return _(model.get('tags')).any(function (tag) {
					return params.tag === tag.name;
				})
			}))
		}

		var filtered = _(this.filter(function (model) {
			return _(model.get('tags')).any(function (tag) {
				return params.tag === tag.name;
			})
		}))

		return _(filtered.filter(function (model) {
			var name = model.get('name').toLowerCase();
			return new RegExp(params.name.toLowerCase()).test(name);
		}))
	}
})