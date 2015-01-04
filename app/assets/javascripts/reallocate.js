window.Reallocate = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new Reallocate.Routers.Router({$rootEl: $('#content')});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  Reallocate.initialize();
});
