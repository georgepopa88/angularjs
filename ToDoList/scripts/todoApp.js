(function(){
    angular
        .module('toDoApp', [])
        .controller('toDoCtrl', ['$scope', function($scope) {

            $scope.todos = [
                {"title": "Lapte", "done": false}
            ];

            $scope.addToDo = function() {
                $scope.todos.push({"title": $scope.newToDo, "done": false});
                $scope.newToDo = "";
            };

            $scope.clearCompleted = function() {
                $scope.todos = $scope.todos.filter(function (item) {
                    return !item.done;
                })
            };

            $scope.clearList = function() {
                $scope.todos = [{}];
            };

            $scope.doneList = function() {
                $scope.doneToDos = $scope.todos.filter(function (item) {
                    return item.done;
                })
            };

        }]);
})();