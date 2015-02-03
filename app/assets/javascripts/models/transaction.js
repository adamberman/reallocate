Reallocate.Models.Transaction = Backbone.Model.extend({

	urlRoot: "/api/transactions",

	acceptable: function() {
		if (this.has('last_edited_id') && this.get('last_edited_id') != Reallocate.currentUser.id) {
			return true;
		} else {
			return false;
		}
	}
	
})