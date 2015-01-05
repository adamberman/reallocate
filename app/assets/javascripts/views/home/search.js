Reallocate.Views.HomeSearch = Backbone.View.extend({

	className: 'search-wrapper',

	template: JST['home/search'],

	events: {
		'click button': 'handleButtonClick'
	},

	handleButtonClick: function (event) {
		event.preventDefault();
		var $button = $(event.currentTarget);
		var id = $button.attr('id');
		var $buttons = this.$('button')
		for (var i = 0; i < $buttons.length; i++) {
			var $currentButton = $($buttons[i]);
			$currentButton.removeClass('btn-primary');
			$currentButton.addClass('btn-default');
		};
		$button.removeClass('btn-default');
		$button.addClass('btn-primary');
		this.collection.trigger('search', id);
	},

	render: function () {
		var content = this.template();
		this.$el.html(content);
		return this;
	}
})