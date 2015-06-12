(function() {
	'use strict';

	angular.module('app').controller('AboutController',
			[ '$scope','$window', 'AboutService', function($scope,$window, AboutService) {
				
				var vm = this;
				
				vm.user={};
				vm.user.name='toto';

				vm.viewLocation = 'webapp/templates/main/about/about.html';

				return vm;

			} ]);

})();