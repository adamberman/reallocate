Reallocate.Views.NewRequest = Backbone.CompositeView.extend({

	initialize: function (options) {
		this.addNavbar();		
		this.tags = options.tags;
	},

	events: { 
		"submit #new-request-form": "createNewRequest",		
		"click button#new-tag-button": 'addTagForm'
	},

	template: JST['modals/new-request'],

	tagForm: JST['layouts/tag-form'],

	className: 'new-request-wrapper',

	addNavbar: function () {
		var navbar = new Reallocate.Views.Navbar();
		this.addSubview('#navbar', navbar)
	},

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