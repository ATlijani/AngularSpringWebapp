(function() {
	'use strict';

	angular.module('app').directive('codeArea', function() {
		return {
			restrict : 'E',
			transclude: true,
			scope : {
				title : '@', 				
			},
			template : '<div class="callout"><h4>#{title}</h4><div ng-transclude ></div></div>'
		}
	});
	
})();