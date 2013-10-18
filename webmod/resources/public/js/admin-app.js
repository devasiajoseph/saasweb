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
var app = angular.module('adminApp', []);
app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	  when('/', {templateUrl: '/admin/dashboard', controller:PageCtrl}).
	  when('/sites', {templateUrl: '/admin/sites', controller:SiteListCtrl}).
	  when('/new-page', {templateUrl: '/admin/new-page', controller:NewCtrl}).
	  when('/view-page', {templateUrl: '/admin/viewer', controller:PageCtrl}).
	  when('/edit-site/:id', {templateUrl: '/admin/edit-site', controller:EditSiteCtrl}).
	  otherwise({redirectTo: '/'});
  }]);

app.factory('SiteListData', function(){
    return [{"site_name":"devasia", "domain_name":"devasia.com"},
	    {"site_name":"tintu", "domain_name":"tintu.com"},
	    {"site_name":"papi", "domain_name":"papi.com"},
	   ];
});

app.factory('SiteData', function(){
    return {"site_name":"devasia", "domain_name":"devasia.com"}

});
function EditSiteCtrl($scope, $routeParams, SiteData){
    console.log($routeParams.id);
    $scope.site = SiteData;
    $scope.saveSite = function(site){
	console.log(site);
    }
    
}

function SiteListCtrl($scope, SiteListData){
    $scope.siteList  = SiteListData;
}


function PageCtrl($scope){
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

    if(document.getElementById){
        newheight=window.innerHeight;
        
    }

    document.getElementById(id).height= (newheight-5) + "px";
    
}
