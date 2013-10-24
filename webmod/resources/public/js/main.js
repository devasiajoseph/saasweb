var app = angular.module('baseApp', ['ngResource']);

function RegisterCtrl($scope){
    $scope.user = {};
    
    $scope.register=function(){
	console.log($scope.registerForm.$valid);
	console.log($scope.user);
    }
}
