Reallocate.Views.NewRequest = Backbone.CompositeView.extend({

	initialize: function (options) {
		this.addNavbar();		
		this.tags = options.tags;
		this.listenTo(this.tags, 'sync', this.render);
	},

	events: { 
		"submit #new-request-form": "createNewRequest"
	},

	template: JST['modals/new-request'],

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

	render: function () {
		var content = this.template({
			tags: this.tags
		});
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})