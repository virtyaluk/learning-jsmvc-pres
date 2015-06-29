Todos.TodoController = Ember.ObjectController.extend({
    actions: {
        removeTodo: function() {
            var todo = this.get('model');

            todo.deleteRecord();
            todo.Save();
        }
    }
});

Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createNewTodo: function() {
            var newVal = this.get('newTodo'),
                todo = this.store.createRecord('todo', {
                    val: newVal,
                    completed: false
                });
            
            this.set('newTodo', '');
            todo.save();
        }
    }
});