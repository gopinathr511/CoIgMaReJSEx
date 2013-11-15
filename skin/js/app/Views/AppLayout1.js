define(

	[ 'backbone', 'marionette', 'app/vent', 'app/Models/Model1', 'app/TemplateStr', 'app/Views/AppItemView1', 'app/Views/RegistView', 'app/Views/AppItemView2' ],
	
	function( Backbone, Marionette, Vent, Model1, TemplateStr, AppItemView1, RegistView, AppItemView2 ){
	
		"use strict";
		
		console.log( 'ListView1 Started!!' );
		
		return Marionette.Layout.extend({
			
			template: _.template( TemplateStr.layoutTemplate ),
			
			regions: {
			
				dataA: '#DataSection',
			
				resultA: '#ManipulationSection',
				
			},
			
			onRender: function(){
			
				// var model2 = Model1.modelCreator;
				
				var model1 = new Model1();
		
				var viewOptions = {
			
					model : model1
					
				};
				
				console.log( 'Layout Initialized!!' );

				this.dataA.show( new AppItemView1( viewOptions ) );

				console.log( 'Layout Finalized!!' );
				
				this.listenTo( Vent, 'loginpage:message', this.onLoginPageMessage, this );
			
				this.listenTo( Vent, 'loginpage:intro', this.onLoginPageIntro, this );
				
				this.listenTo( Vent, 'regispage:intro', this.onRegisPageIntro, this );
				
			},
		
			onLoginPageMessage: function ( model1 ) {
			
				var viewOptions = {
			
					model : model1
					
				};
				
				// this.removeRegion( 'dataA' );
				
				this.dataA.close();
				
				// this.dataA.show( new AppItemView2( viewOptions ) );
				
				this.resultA.show( new AppItemView2( viewOptions ) );
				
				console.log( 'Trigger Catched!!' );

			},
			
			onLoginPageIntro: function () {
			
				var model1 = new Model1();
			
				var viewOptions = {
				
					model : model1
					
				};
				
				// this.removeRegion( 'resultA' );
				
				this.resultA.close();
				
				// this.resultA.show( new AppItemView1( viewOptions ) );
				
				this.dataA.show( new AppItemView1( viewOptions ) );
				
				console.log( 'Trigger Catched!!' );

			},
			
			onRegisPageIntro: function ( model1 ) {
			
				// this.removeRegion( 'resultA' );
			
				var viewOptions = {
				
					model : model1
					
				};
				
				this.dataA.close();
				
				// this.resultA.show( new AppItemView1( viewOptions ) );
				
				this.resultA.show( new RegistView( viewOptions ) );
				
				console.log( 'Trigger Catched!!' );

			},
			
		});
	
	}

);