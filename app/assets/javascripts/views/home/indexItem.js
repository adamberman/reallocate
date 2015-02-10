Reallocate.Views.IndexItem = Backbone.CompositeView.extend({

	initialize: function (options) {
		this._type = options.type;
	},

	events: {
		'click .request-content-main': 'hideOrUnhideRequest',
		'click .offer-content-main': 'hideOrUnhideOffer',
		'click button.transaction': 'handleTransactionClick',
		'hidden.bs.modal': 'removeTransactionModal'
	},

	className: 'index-item',

	organizationTemplate: JST['home/organization-item'],

	requestTemplate: JST['home/request-item'],

	offerTemplate: JST['home/offer-item'],

	hideOrUnhideRequest: function () {
		this.$('.request-content-expander').toggleClass('hidden-container');
		this.$('.request-content-header').toggleClass('hidden-container');
	},

	hideOrUnhideOffer: function () {
		this.$('.offer-content-expander').toggleClass('hidden-container');
		this.$('.offer-content-header').toggleClass('hidden-container');
	},

	handleTransactionClick: function (event) {
		event.preventDefault();
		this.addTransactionModal();
	},

	addTransactionModal: function () {
		if (this.model.transaction().id) {
			var modal = new Reallocate.Views.TransactionModal({
				indexItem: this.model,
				itemType: this._type,
				model: this.model.transaction()
			})
		} else {
			var modal = new Reallocate.Views.TransactionModal({
				indexItem: this.model,
				itemType: this._type,
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
		var content;
		if (this._type === 'Organization') {
			content = this.organizationTemplate({
				item: this.model
			});
		}
		if (this._type === 'Request') {
			content = this.requestTemplate({
				item: this.model,
				requestable: this.model.attributes.requestable
			});
		}
		if (this._type === 'Offer') {
			content = this.offerTemplate({
				item: this.model,
				offerable: this.model.attributes.offerable
			});
		}

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