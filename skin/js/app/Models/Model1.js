define(

	[ 'backbone' ],
	
	function( Backbone ){
	
		'use strict';
		
		console.log( 'Model1 Started!!' );
		
		return Backbone.Model.extend({
			
			//localStorage:  new Backbone.LocalStorage( 'sample-marionette' ),
			
			defaults: {
			
				loginResult: 'false',
				
				loginUser: '',
				
			},
			
			// urlRoot:   'index.php/MainControl/mainController/dataOpns',
		
			// idAttribute: 'id',
			
			/* url: function(){
			
				var base = this.urlRoot || ( this.collection && this.collection.url ) || '/';
				
				if( this.isNew() ){
				
					return base;
					
				} else{
				
					return base + '?id=' + encodeURIComponent( this.id );
					
				}
				
			}, */
			
			modelCreator: function(){
	
				var model1 = new this;
				
				return model1;
		
			},
			
			initialize: function(){
			
				this.on( 'all', function( e ){
				
					console.log( this.get('loginUser') + ' - ' + this.get('loginResult') + ' event : ' + e );
					
				});
				
			}

		});
	
	}
	
);

// , 'localstorage'