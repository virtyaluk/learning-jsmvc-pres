window.TodoItem = Backbone.Model.extend({});

window.TodoItems = Backbone.Collection.extend({
    model: TodoItem,
    filterCompleted: function() {
        this.remove(this.filter(function(item) {
            return item.get('completed');
        }));
    }
});