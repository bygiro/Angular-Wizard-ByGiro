(function() {
	angular.module('demoApp', ['ByGiro.wizard']).controller('demoCtrl', [
		'$scope','$window', function($scope, $window) {
			$scope.wizardOptions = {
				steps: [
					{label:'Details',content:'Aenean convallis lorem vel risus dictum interdum! Integer aliquam elit ut ultrices aliquam? Quisque nibh diam; dictum et nisl ac, cursus luctus velit. Etiam blandit semper tincidunt! Suspendisse tristique tellus non volutpat dictum. Proin sem orci, congue at orci et, commodo condimentum lacus! Donec condimentum imperdiet porttitor. Pellentesque commodo elementum ante vitae blandit. Sed vel libero nec mauris aliquet luctus vel sed justo. Aliquam leo sapien, volutpat a velit eu, pharetra feugiat mauris.'},
					{label:'Delivery',content:'In facilisis commodo mauris, in semper nunc sollicitudin nec. Nulla viverra ut nisl elementum euismod. Suspendisse facilisis, orci ornare pulvinar porttitor; urna justo scelerisque augue, eget malesuada neque lacus at nisi. In tincidunt tincidunt diam ut consectetur. Etiam dui diam, porta non ornare eu, rutrum in elit. Etiam maximus convallis diam! Curabitur aliquet ipsum sed interdum lacinia.'},
					{label:'Payment',content:'In hac habitasse platea dictumst. Nam malesuada sit amet purus a posuere. Nam aliquam eu purus a accumsan! Nulla et scelerisque ex, id tincidunt nisl. Praesent condimentum posuere lorem. Cras congue sit amet lacus a fringilla. Integer tempor enim at mauris pretium, lobortis gravida nulla consequat?'}
				],
				onCompleted: function(){
					
				},
				checkStep: function(){
					
					return true;
				}
			};
		}
	]);
})();