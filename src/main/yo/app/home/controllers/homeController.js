(function() {
	'use strict';

	angular.module('app').controller('HomeController',
			[ '$window', 'HomeService', function($window, HomeService) {

				var vm = this;

				vm.viewLocation = 'webapp/templates/home/home.html';

				return vm;
			} ]);

})();