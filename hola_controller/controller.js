angular.module('myFirstApp', [])
.controller('FirstController', function ($scope) {
  $scope.name = 'Alex'
  $scope.newComment = {}
  $scope.comments = [
    {
      comment: 'Buen trabajo',
      username: 'alex'
    },
    {
      comment: 'Mal trabajo',
      username: 'Alex2'
    }
  ]
  $scope.addComment = function () {
    $scope.comments.push($scope.newComment)
    $scope.newComment = {}
  }
})
