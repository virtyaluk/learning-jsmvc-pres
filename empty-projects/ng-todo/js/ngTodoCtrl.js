ngTodo.controller('NgTodoCtrl', ['$scope', function($scope) {
    $scope.todos = [
        { val: 'Item #1', completed: false },
        { val: 'Item #2', completed: true },
        { val: 'Item #3', completed: false },
        { val: 'Item #4', completed: false },
        { val: 'Item #5', completed: true },
        { val: 'Item #6', completed: false }
    ];
}]);