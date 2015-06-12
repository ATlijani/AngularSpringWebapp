(function() {
	'use strict';

	angular.module('app').controller('signupController',
			[ '$scope', function($scope) {

				var vm = this;

				vm.reset = function() {
					vm.firstName = '';
					vm.lastName = '';
					vm.email = '';
				}

				vm.reset();

				vm.submitted = false;
				vm.submit = function() {
					if (vm.signup_form.$valid) {
						// Submit as normal
					} else {
						vm.signup_form.submitted = true;
					}
				}

				return vm;

			} ]);

})();