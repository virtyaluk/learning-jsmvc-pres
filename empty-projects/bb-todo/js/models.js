window.TodoItem = Backbone.Model.extend({
    toggle: function() {
        this.set('completed', !this.get('completed'));
    }
});

window.TodoItems = Backbone.Collection.extend({
    model: TodoItem,
    filterCompleted: function() {
        this.remove(this.filter(function(item) {
            return item.get('completed');
        }));
    }
});