Reallocate.Views.IndexItem = Backbone.CompositeView.extend({

	initialize: function (options) {
		this._type = options.type;
	},

	events: {
		'click .request-content-main': 'hideOrUnhide',
		'click button.transaction': 'handleTransactionClick',
		'hidden.bs.modal': 'removeTransactionModal'
	},

	className: 'index-item',

	organizationTemplate: JST['home/organization-item'],

	requestTemplate: JST['home/request-item'],

	hideOrUnhide: function () {
		this.$('.request-content-expander').toggleClass('hidden-container');
		this.$('.request-content-header').toggleClass('hidden-container');
	},

	handleTransactionClick: function (event) {
		event.preventDefault();
		this.addTransactionModal();
	},

	addTransactionModal: function () {
		if (this.model.transaction().id) {
			var modal = new Reallocate.Views.TransactionModal({
				indexItem: this.model,
				model: this.model.transaction()
			})
		} else {
			var modal = new Reallocate.Views.TransactionModal({
				indexItem: this.model,
				model: new Reallocate.Models.Transaction()
			})
		}
		this.addSubview('.modals', modal);
		$('.modal').modal('show');
	},

	removeTransactionModal: function (event) {
		var subview = _.find(this.subviews('.modals'), function (subview) { 
			return subview.el === event.target
		})
		this.removeSubview('.modals', subview);
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
		this.attachSubviews();
		var $button = this.$('button.transaction');
		if (this.model.transaction().id && 
			$button.attr('id') === 'new-transaction') {
			$button.text('View Transaction');
			$button.attr('id', 'view-transaction');
		}
		return this;
	}
})