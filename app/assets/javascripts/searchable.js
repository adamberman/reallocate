Backbone.Searchable = Backbone.Collection.extend({
	
	search: function (params) {
		if (params.name === "" && params.tag === "") {
			return this;
		}

		if (params.tag === "") {
			return _(this.filter(function (model) {
				var name = model.get('name').toLowerCase();
				return new RegExp(params.toLowerCase()).test(name);
			}));
		}

		if (params.name === "") {
			return _(this.filter(function (model) {
				return model.tags().any(function (tag) {
					return params.tag === tag.escape('name');
				})
			}))
		}

		var filtered = _(this.filter(function (model) {
			return model.tags().any(function (tag) {
				return params.tag === tag.escape('name');
			})
		}))

		return _(filtered.filter(function (model) {
			return model.tags().any(function (tag) {
				return params.tag === tag.escape('name');
			})
		}))
	}
})