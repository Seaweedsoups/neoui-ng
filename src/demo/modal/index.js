
define( [ "ui/modal/modal-ng" ], function() {
	
	"use strict";

	angular
	.module( "modal.controllers", [ "$ui.modal" ] )
	.controller( "containerController", [ "$scope", "$modal", function( $scope, $modal ) {
	
		$scope.open = function( animate ) {
		
			$modal.open( {
				controller: "modalController",
				template: "<p>This is a modal window. You can do the following things with it:</p><ul> <li><strong>Read:</strong> modal windows will probably tell you something important so don't forget to read what they say.</li> <li><strong>Look:</strong> a modal window enjoys a certain kind of attention; just look at it and appreciate its presence.</li> <li><strong>Close:</strong> click the outside close the modal.</li> </ul>",
				animate: animate
			} );
		};
	} ] )
	.controller( "modalController", [ "$scope", function( $scope ) {
	
	} ] );
} );
