(function() {
	'use strict';

	angular.module('app').controller('ContactController',
			[ '$window', 'ContactService', function($window, ContactService) {

				var vm = this;

				vm.viewLocation = 'webapp/templates/main/contact/contact.html'

				return vm;

			} ]);

})();