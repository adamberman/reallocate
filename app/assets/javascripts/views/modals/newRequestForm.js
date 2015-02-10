Reallocate.Views.NewRequest = Backbone.View.extend({

	events: { 
		"submit #new-request-form": "createNewRequest"
	},

	template: JST['modals/new-request'],

	className: 'new-request-wrapper',

	createNewRequest: function (event) {
		event.preventDefault();
		var requestParams = $(event.target).serializeJSON();
		var that = this;
		var request = new Reallocate.Models.Request(requestParams);

		request.save({}, {
			success: function (model, resp) {
				Backbone.history.navigate('/dashboard', { trigger: true });
			},
			error: function (model, resp) {
				alert('error');
			}
		});
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})