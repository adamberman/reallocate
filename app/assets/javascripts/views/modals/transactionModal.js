Reallocate.Views.TransactionModal = Backbone.View.extend({

	initialize: function (options) {
		// this.listenTo(this.model.bids(), 'add', this.render);
		if (options.indexItem) {
			this.indexItem = options.indexItem;
		}
	},

	className: 'modal fade',

	template: JST['modals/transaction'],

	events: {
		'click button#submit-transaction': 'saveTransaction'
	},

	saveTransaction: function (event) {
		event.preventDefault();
		var params = $('form.new-transaction').val().serializeJSON();
		this.model.set(params);
		var that = this;
		this.model.save({}, {
			success: function (model, response) {
				alert('added');
			},
			error: function (model, response) {
				alert('error');
			}
		});
	},

	render: function () {
		if (this.indexItem) {
			var content = this.template({
				item: this.indexItem
			});
		} else {
			var content = this.template({
				item: this.model
			});
		}
		if (this.model.acceptable()) {
			this.renderSaveButton();
		}
		this.$el.html(content);
		return this;
	}
})