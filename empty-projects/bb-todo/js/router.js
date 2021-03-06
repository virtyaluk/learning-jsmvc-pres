window.TodoApp = new (Backbone.Router.extend({
    routes: { '': 'index' },
    initialize: function() {
        this.todoItems = new TodoItems();
        this.todosView = new TodosView({ collection: this.todoItems });
        this.todosView.render();

        $('.btn-clear').click(function(e) {
            window.TodoApp.todosView.filterCompleted();
        });

        $('.btn-success').click(function() {
            window.TodoApp.todoItems.add({ val: $('#newTodo').val(), completed: false });
            $('#newTodo').val('');
        });
    },
    index: function() {
        var fixtures = [
            { val: 'Item #1', completed: true },
            { val: 'Item #2', completed: false },
            { val: 'Item #3', completed: true },
            { val: 'Item #4', completed: false },
            { val: 'Item #5', completed: true },
            { val: 'Item #6', completed: false },
        ];

        $('#app').html(this.todosView.el);
        this.todoItems.reset(fixtures);
    },
    start: function () {
        Backbone.history.start();
    }
}));