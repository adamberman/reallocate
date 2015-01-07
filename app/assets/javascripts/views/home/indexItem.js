Reallocate.Views.IndexItem = Backbone.View.extend({

	initialize: function (options) {
		this._type = options.type;
	},

	events: {
		'click .request-content-header': 'hideOrUnhide'
	},

	className: 'index-item',

	organizationTemplate: JST['home/organization-item'],

	requestTemplate: JST['home/request-item'],

	hideOrUnhide: function () {
		this.$('.request-content-expander').toggleClass('hidden-container');
	},

	render: function () {
		var template;
		if (this._type === 'organization') {
			template = this.organizationTemplate;
		}
		if (this._type === 'request') {
			template = this.requestTemplate;
		}

		var content = template({
			item: this.model,
			requestable: this.model.attributes.requestable
		});

		this.$el.html(content);
		return this;
	}
})