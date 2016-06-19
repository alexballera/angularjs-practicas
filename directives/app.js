angular.module('customDirective', [])
.directive('backImg', function () {
  return function ($scope, element, attrs) {
    attrs.$observe('backImg', function (value) {
      element.css({
        'background': 'url(' + value + ')',
        'background-position': 'center',
        'background-size': 'cover'
      })
    })
  }
})
.controller('AppCtrl', function ($scope, $http) {
  $http.get('https://api.github.com/users/alexballera/repos')
  .success(function (data) {
    $scope.repos = data
  })
  .error(function (err) {
    console.log(err)
  })
})
