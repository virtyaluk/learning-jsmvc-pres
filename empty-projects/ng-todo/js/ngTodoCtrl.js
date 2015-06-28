ngTodo.controller('NgTodoCtrl', ['$scope', function($scope) {
    $scope.todos = [
        { val: 'Item #1', completed: false },
        { val: 'Item #2', completed: true },
        { val: 'Item #3', completed: false },
        { val: 'Item #4', completed: false },
        { val: 'Item #5', completed: true },
        { val: 'Item #6', completed: false }
    ];

    $scope.addNewTask = function() {
        $scope.todos.unshift({ completed: false, val: $scope.newTask });
        $scope.newTask = '';
    };

    $scope.clearCompleted = function() {
        $scope.todos = $scope.todos.filter(function(todo) { return !todo.completed; });
    };

    $scope.removeTodo = function(i) {
        $scope.todos.splice(i, 1);
    };
}]);