angular.module('FinalApp')
.controller('MainController', function ($scope, $resource, PostResource) {
	User = $resource('http://jsonplaceholder.typicode.com/users/:id', {id: '@id'})
	$scope.posts = PostResource.query()
	$scope.users = User.query()
	$scope.removePost = function (post) {
		PostResource.delete({id: post.id}, function (data) {
			console.log(data)
			alert('El Post fue eliminado')
		})
		$scope.posts = $scope.posts.filter(function (element) {
			return element.id !== post.id
		})
	}
	// query() ~> GET /posts ~> Un arreglo de posts
})
.controller('PostController', function ($scope, PostResource, $routeParams) {
	$scope.title = 'Editar Post'
	$scope.post = PostResource.get({id: $routeParams.id})
	$scope.savePost = function () {
		PostResource.update({id: $scope.post.id}, {data: $scope.post}, function (data) {
			console.log(data)
			alert('El Post fue editado')
		})
	}
})
.controller('NewPostController', function ($scope, PostResource) {
	$scope.post = {}
	$scope.title = 'Crear Post'
	$scope.savePost = function () {
		PostResource.save({data: $scope.post}, function (data) {
			console.log(data)
			alert('El Post fue creado')
		})
	}
})

