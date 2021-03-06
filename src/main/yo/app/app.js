(function() {
	'use strict';

	angular.module('ExprParser', []).config(
			[ '$interpolateProvider', function($interpolateProvider) {
				$interpolateProvider.startSymbol('#{');
				$interpolateProvider.endSymbol('}');
			} ]);

	angular.module('app', [ 'ExprParser', 'ngMessages', 'ngAnimate', 'ngRoute', 'ngSanitize',
			'mgcrea.ngStrap' ]);

	angular.module('app').controller('ApplicationController', ['$window','ConfService',function($window,ConfService){
		
		var vm = this;

		vm.projectAuthor = null;
		vm.projectName = null;

		vm.loadConfig = function() {
			ConfService.initConfig().error(function() {
				vm.projectAuthor = vm.projectName = 'Error!';
			}).then(function(res) {
				vm.projectAuthor = res.data.projectAuthor || 'Unknown';
				vm.projectName = res.data.projectName || 'Unknown';
				vm.projectWebsite = res.data.projectWebsite || 'Unknown';
			});
		};

		vm.loadConfig();

		return vm;

	}]);
	
})();
