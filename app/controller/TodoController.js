var app = angular.module('todoList', ["oc.lazyload"]);

app.controller('todoController', function($scope, $http) {

    $scope.addTask = function(description) {
        $http({
            method: 'POST',
            url: '/tasks/add',
            data: {description: description}
        }).then(function() {
            $scope.tasks.remove();
            $scope.findAll();
        }, null);
    };

    $scope.findAll = function() {
        $http.get("/tasks").then(function(response) {
            $scope.tasks = response;
        }, null);
    };

    $scope.remove = function(taskId, index) {
        $http({
            method: 'POST',
            url: '/tasks/remove',
            data: {taskId: taskId}
        }).then(function() {
            $scope.tasks.splice(index, 1);
        }, null)
    };

    $scope.findAll();
});