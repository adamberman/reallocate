Reallocate.Collections.Bids = Backbone.Searchable.extend({

	model: Reallocate.Models.Bid,

	url: '/api/bids',

	comparator: function (card1, card2) {
		if (card1.id > card2.id) {
			return -1;
		} else if (card1.id < card2.id) {
			return 1;
		} else {
			return 0;
		}
	}
})