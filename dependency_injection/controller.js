angular.module('myFirstApp', [])
// Inyectamos las dependencias que vamos a utilizar
// en el controlador pasamos las dependencias '$scope',
// '$http', etc antes de la función y luego la inyectamos
// entre los paréntesis de la función, para luego ser usadas
// en el código, puede ser sustituido por una variable 'mv'
.controller('FirstController', ['$scope', '$http', function (mv, $http) {
  mv.name = 'Alex'
  mv.newComment = {}
  mv.comments = [
    {
      comment: 'Buen trabajo',
      username: 'alex'
    },
    {
      comment: 'Mal trabajo',
      username: 'Alex2'
    }
  ]
  mv.addComment = function () {
    mv.comments.push(mv.newComment)
    mv.newComment = {}
  }
}])