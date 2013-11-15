define(

	[ 'marionette', 'app/vent', 'app/Views/AppItemView2' ],
	
	function( Marionette, Vent, AppItemView2 ){
	
		"use strict";
		
		console.log( 'ListView1 Started!!' );
		
		return Backbone.Marionette.CollectionView.extend({

			tagName: 'div',
			
			className: 'SimpleView',
			
			itemView: AppItemView2,
			
			initialize: function(){
				
			},
			
		});
	
	}

);