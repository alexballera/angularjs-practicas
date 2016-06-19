angular.module('myFirstApp', [])
// .controller('FirstController', function ($scope, $rootScope) {
// })
.run(function ($rootScope) {
  $rootScope.name = 'Padre'
})
.controller('FirstController', function ($scope) {
  $scope.name = "Hijo"
})
.controller('ChildController' , function ($scope) {
})
