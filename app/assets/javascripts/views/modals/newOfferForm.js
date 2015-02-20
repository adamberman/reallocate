Reallocate.Views.NewOffer = Backbone.CompositeView.extend({

	initialize: function (options) {
		this.addNavbar();
		this.tags = options.tags;
		this.listenTo(this.tags, 'sync', this.render);
	},

	events: { 
		"submit #new-offer-form": "createNewOffer"
	},

	template: JST['modals/new-offer'],

	className: 'new-offer-wrapper',

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
	},

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
		this.attachSubviews();
		return this;
	}
})