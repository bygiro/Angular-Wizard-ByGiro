/*! angular-wizard-bygiro - v0.0.1 - 18 april 2015
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2015; Licensed  
*/

angular.module('ByGiro.wizard',[])
.directive('bgwWizard', ['$window','$timeout', function ($window, $timeout) {
	
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
		
		$timeout(function () {
			// This code will run after
			// templateUrl has been loaded, cloned
			// and transformed by directives.
			bg(element).wizardByGiro(options);
		}, 0);		
	}

	return({
		restrict: "A",
		scope: {},
		link: link,
		templateUrl:'tmpl.html',
	});
}])

// simple compatibility with jQuery Wizard plugins
.directive('bgwWizardInit', ['$timeout', function ($timeout) {
    return {
        link: function ($scope, element, attrs) {
			$timeout(function () {
				bg(element).wizardByGiro();
			}, 0, false);
        }
    };
}]);