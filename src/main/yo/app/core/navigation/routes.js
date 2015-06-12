(function() {
    'use strict';
    
	angular
		.module('app')
		.config(Routes);
	
	Routes.$inject = ['$routeProvider'];
	
    function Routes($routeProvider) {

    	$routeProvider.
	    	 when('/', {
	    	   templateUrl: 'templates/main/home/home.html',
	    	   controller:	'HomeController',
	           controllerAs: 'home'
	       	 }).
	       	when('/about', {
		    	   templateUrl: 'templates/main/about/about.html',
		    	   controller:	'AboutController',
		           controllerAs: 'about'
		       	 }).
	       	when('/contact', {
		    	   templateUrl: 'templates/main/contact/contact.html',
		    	   controller:	'ContactController',
		           controllerAs: 'contact'
		       	 }).
	         otherwise({
	           redirectTo: '/'
	         });
    }
    
})();