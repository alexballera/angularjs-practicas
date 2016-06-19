angular.module('myModule', [])
  .filter('removeHtml', function () {
    return function (texto) {
      return String(texto).replace(/<[^>]+>/gm, '')
    }
  })
  .controller('FiltersController', function ($scope) {
    // $scope.mi_html = '<p>Hola Mundo</p>'
    $scope.mi_html = {}
    $scope.mi_html.title = 'Hola'
    $scope.mi_html.body = 'Descripción'
    $scope.costo = 2
  })
