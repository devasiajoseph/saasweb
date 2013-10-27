/*
angular.module('adminApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/', {templateUrl: '/admin/dashboard', controller:PageCtrl}).
	  when('/sites', {templateUrl: '/admin/sites', controller:PageCtrl}).
	  when('/new-page', {templateUrl: '/admin/new-page', controller:NewCtrl}).
	  when('/view-page', {templateUrl: '/admin/viewer', controller:PageCtrl}).
	  when('/edit-site/:id', {templateUrl: '/admin/edit-site', controller:EditPageCtrl}).
	  otherwise({redirectTo: '/'});
  }]);

*/
var app = angular.module('adminApp', ['ngResource']);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/', {templateUrl: '/admin/dashboard', controller:PageCtrl}).
	  when('/sites', {templateUrl: '/admin/sites', controller:SiteListCtrl}).
	  when('/new-page', {templateUrl: '/admin/new-page', controller:NewCtrl}).
	  when('/view-page', {templateUrl: '/admin/viewer', controller:PageCtrl}).
	  when('/site-edit/:id', {templateUrl: '/admin/edit-site', controller:EditSiteCtrl}).
	  otherwise({redirectTo: '/'});
  }]);

app.factory('SiteListData', function($resource){
    return $resource('/admin/site-list');
});

app.factory('SiteData', function($resource){
    
    return $resource('/admin/site-data');
});

app.directive('loader', function(scope, element, attributes){
    
});

function EditSiteCtrl($scope, $rootScope, $routeParams, $resource){
    $rootScope.title = "Edit site";
    var siteData = $resource('/admin/site-data', {id:$routeParams.id});
    var sites = siteData.query(function(){
	$scope.site = sites[0];
    });
    $scope.saveSite=function(){
	console.log($scope.site);
    }
    
}

function SiteListCtrl($scope, $rootScope, SiteListData){
    $rootScope.title = "My sites";
    console.log("site list")
    $scope.siteList  = SiteListData.query();
}


function PageCtrl($scope, $rootScope){
    $rootScope.title = "Welcome to your dashboard";
    $scope.hello = "Hello world";
    console.log("page ctrl");
}

function PageEditCtrl($scope){
    console.log("")
}

function NewCtrl($scope){
    console.log("new editor");
    $( '.ckeditor' ).ckeditor();
}


function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById(id)){
        newheight=document.getElementById(id).window.innerHeight;
        
    }

    document.getElementById(id).height= (newheight+200) + "px";
    
}
