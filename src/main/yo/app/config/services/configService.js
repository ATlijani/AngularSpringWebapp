(function() {
	'use strict';

	angular.module('app').factory('ConfService', [ '$http', function($http) {

		return {
			initConfig : function() {
				return $http.get('mvc/config');
			}
		}
	} ]);

})();
