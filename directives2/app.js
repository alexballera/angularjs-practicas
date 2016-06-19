angular.module('customDirective', [])
.directive('myAutocomplete', function () {
  function link (scope, element, attrs) {
    $(element).autocomplete({
      source: scope[attrs.myAutocomplete],
      select: function (ev, ui) {
        ev.preventDefault()
        if (ui.item) {
        }
      },
      focus: function (ev, ui) {
      }
    })
  }
  return {
    link: link
  }
})
.directive('backImg', function () {
  return function (scope, element, attrs) {
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
  $scope.repos = []
  $http.get('https://api.github.com/users/alexballera/repos')
  .success(function (data) {
    $scope.repos = data
    for (var i = data.length - 1; i >= 0; i--) {
      var repo = data[i]
      $scope.repos.push(repo.name)
    }
  })
  .error(function (err) {
    console.log(err)
  })
})
