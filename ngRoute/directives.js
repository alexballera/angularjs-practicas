angular.module('customDirective')
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