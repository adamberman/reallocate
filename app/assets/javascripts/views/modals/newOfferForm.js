Reallocate.Views.NewOffer = Backbone.CompositeView.extend({

	initialize: function (options) {
		this.addNavbar();
		this.tags = options.tags;
	},

	events: { 
		"submit #new-offer-form": "createNewOffer",
		"click button#new-tag-button": 'addTagForm'
	},

	template: JST['modals/new-offer'],

	tagForm: JST['layouts/tag-form'],

	className: 'new-offer-wrapper',

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
	},

	createNewOffer: function (event) {
		event.preventDefault();
		var offerParams = $(event.target).serializeJSON();
		var tags = [];
		var $tags = $('#tags');
		$tags.each(function (tag) {
			if ($tags[tag].val() !== "") {
				tags.push($tags[tag].val());
			}
		})
		offerParams.offer.tags = tags;
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

	addTagForm: function (event) {
		event.preventDefault();
		var content = this.tagForm({
			tags: this.tags
		})
		this.$('#tags').append(content);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})