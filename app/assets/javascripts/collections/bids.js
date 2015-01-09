Reallocate.Collections.Bids = Backbone.Searchable.extend({

	model: Reallocate.Models.Bid,

	url: '/api/bids',

	comparator: function (bid1, bid2) {
		if (bid1.id > bid2.id) {
			return 1;
		} else if (bid1.id < bid2.id) {
			return -1;
		} else {
			return 0;
		}
	}
})