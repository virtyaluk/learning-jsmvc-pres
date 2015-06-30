window.TodoApp = new (Backbone.Router.extend({
    routes: { '': 'index' },
    index: function() {

    },
    start: function () {
        Backbone.history.start();
    }
}));