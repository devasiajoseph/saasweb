angular.module('adminApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/', {templateUrl: '/admin/dashboard', controller:PageCtrl}).
	  when('/new-page', {templateUrl: '/admin/new-page', controller:NewCtrl}).
	  when('/new-page/id', {templateUrl: '/admin/new-page', controller:NewCtrl}).
	  otherwise({redirectTo: '/'});
  }]);


function PageCtrl($scope){
    $scope.hello = "Hello world";
    console.log("page ctrl");
}

function NewCtrl($scope){
    console.log("new editor");
    $( '.ckeditor' ).ckeditor();
}
