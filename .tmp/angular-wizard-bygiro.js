/*! angular-wizard-bygiro - v0.0.1 - 18 april 2015
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2015; Licensed  
*/

angular.module('ByGiro.wizard',[])
.directive('bgwWizard', ['$window','$parse','$compile', function ($window, $parse, $compile) {
	
		function link( scope, element, attributes) {
					
			var bg = (typeof jQuery != 'undefined') ? jQuery : angular.element;	
			var options = {};
			if(attributes.bgwOptions && scope.$parent[attributes.bgwOptions]){
				options = scope.$parent[attributes.bgwOptions];
			}

			scope.steps = [];
			if(typeof options.steps != 'undefined'){
				scope.steps = options.steps;
			}
			
			// bg(element).wizardByGiro(options);
		}

	return({
		restrict: "A",
		scope: {},
		link: link,
		templateUrl:'tmpl.html',
	});
}]);