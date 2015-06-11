(function() {
	'use strict';

	angular.module('app').directive('myDirective', function() {
		return {
			restrict : 'EACM',
			replace : true,
			scope : {
				myUrl : '@url', // attribute name = url
				myLinkText : '@' // implicit attribute name (my-link-text)
			},
			template : '<a href="#{myUrl}">#{myLinkText}</a>'
		}
	});

})();