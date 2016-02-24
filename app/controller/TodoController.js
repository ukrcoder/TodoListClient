var app = angular.module('todoList', ["oc.lazyload"]);

app.controller('todoController', function($scope, $http) {
    $ocLazyLoad.load("");

    $http.get("/tasks").then(function(response) {
        $scope.tasks = response;
    }, null);

    $scope.remove = function(taskId) {
        $http({
            method: 'POST',
            url: '/tasks/remove',
            data: {taskId: taskId}
        })
    };

    $scope.remove = function(taskId) {
        $http({
            method: 'POST',
            url: '/tasks/remove',
            data: {taskId: taskId}
        })
    };

    $scope.addTask = function(description) {
        $http({
            method: 'POST',
            url: '/tasks/add',
            data: {description: description}
        })
    };

});