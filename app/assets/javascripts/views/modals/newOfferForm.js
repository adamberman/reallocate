Reallocate.Views.NewOffer = Backbone.View.extend({

	events: { 
		"submit #new-offer-form": "createNewOffer"
	},

	template: JST['modals/new-offer'],

	className: 'new-offer-wrapper',

	createNewOffer: function (event) {
		event.preventDefault();
		var offerParams = $(event.target).serializeJSON();
		var that = this;
		var offer = new Reallocate.Models.Offer(offerParams);

		offer.save({}, {
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