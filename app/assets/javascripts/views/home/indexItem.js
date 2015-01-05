Reallocate.Views.IndexItem = Backbone.View.extend({

	className: 'index-item',

	template: JST['home/index-item'],

	render: function () {
		var content = this.template({
			item: this.model
		});

		this.$el.html(content);
		return this;
	}
})