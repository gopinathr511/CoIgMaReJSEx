define(

	[ 'backbone', 'app/Models/Model1', 'localstorage' ],
	
	function( Backbone, Model1 ){
	
		"use strict";
		
		console.log( 'SamplePlay Started!!' );
		
		return Backbone.Collection.extend({
		
			model: Model1,
			
			url:  'index.php/MainControl/mainController/dataOpns',
			
			//comparator: 'textmsg',

			//localStorage:  new Backbone.LocalStorage( 'sample-marionette' ),
			
			resultMsg: function() {
			
				return model.get( 'textmsg' );
				
			},
			
			sampleAjaxRetrieval: function(){
		
				this.fetch({
				
					success: function( data ){
					
					},
					
					error: function( error ){	
					
					}
					
				});
				
			},
			
			initialize: function(){
			
				this.on( 'all', function( e ){
				
					console.log( 'Collec event : ' + e );
					
				});
				
			}
		
		});
	
	}

);
