(function() {
    'use strict';
    
	angular
		.module('app')
		.config(Routes);
	
	Routes.$inject = ['$routeProvider'];
	
    function Routes($routeProvider) {

    	$routeProvider.
	    	 when('/', {
	    	   templateUrl: 'templates/home/home.html',
	    	   controller:	'HomeController',
	           controllerAs: 'home'
	       	 }).
	       	when('/about', {
		    	   templateUrl: 'templates/about/about.html',
		    	   controller:	'AboutController',
		           controllerAs: 'about'
		       	 }).
	       	when('/contact', {
		    	   templateUrl: 'templates/contact/contact.html',
		    	   controller:	'ContactController',
		           controllerAs: 'contact'
		       	 }).
	         otherwise({
	           redirectTo: '/'
	         });
    }
    
})();