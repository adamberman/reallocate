Reallocate.Views.TransactionModal = Backbone.View.extend({

	initialize: function (options) {
		if (options.indexItem) {
			this.indexItem = options.indexItem;
			this.itemType = options.itemType;
		}
	},

	className: 'modal fade',

	template: JST['modals/transaction'],

	events: {
		'click button#accept-transaction-button': 'acceptTransaction',
		'click button#edit-transaction-button': 'toggleEditView',
		'click button#submit-transaction': 'saveTransaction'
	},

	saveTransaction: function (event) {
		event.preventDefault();
		var params = $('form.new-transaction').serializeJSON();
		params.transaction.hours = parseInt(params.transaction.hours);
		if (this.indexItem) {
			params.transaction.listable_type = this.itemType;
			params.transaction.listable_id = this.indexItem.id;
		}
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

	acceptTransaction: function (event) {
		event.preventDefault();
		this.model.set({
			status: 'Accepted'
		});
		this.model.save({}, {
			success: function (model, response) {
				alert('accepted');
			},
			error: function (model, response) {
				alert('error');
			}
		});
	},

	toggleEditView: function(event) {
		event.preventDefault();
		$('#transaction-edit').toggleClass('hidden-container');
	},

	render: function () {
		if (this.indexItem && !this.indexItem.transaction().id) {
			var content = this.template({
				item: this.indexItem,
				acceptable: this.model.acceptable(),
				editable: this.model.editable()
			});
		} else {
			var content = this.template({
				item: this.model,
				acceptable: this.model.acceptable(),
				editable: this.model.editable()
			});
		}
		this.$el.html(content);

		return this;
	}
})