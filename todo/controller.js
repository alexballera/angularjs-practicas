angular.module('toDoList', ['LocalStorageModule'])
  .controller('ToDoController', function ($scope, localStorageService) {
    if (localStorageService.get('angular-todolist')) {
      $scope.todo = localStorageService.get('angular-todolist')
    }else{
      $scope.todo = []
    }
    /*
    {
        actividad: 'Tarea',
        fecha: 'fecha'
    }
    */
    $scope.$watchCollection('todo', function(newValue, oldValue) {
      localStorageService.set('angular-todolist', $scope.todo)
    })
    $scope.addActv = function () {
      $scope.todo.push($scope.newActv)
      $scope.newActv = {}
    }
    // $scope.clean = function () {
    //   $scope.todo = []
    // }
  })
