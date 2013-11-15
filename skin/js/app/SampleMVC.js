define(

	[ 'backbone', 'marionette', 'app/Views/AppLayout1' ],
	
	function( Backbone, Marionette, AppLayout1 ){
		
		"use strict";
		
		var SampleMVC = new Marionette.Application();
		
		SampleMVC.addRegions({
			
			mainA: '#MainPageSection',
			
		});
		
		Backbone.emulateHTTP = true;

		Backbone.emulateJSON = true;
			
		SampleMVC.on( 'initialize:after', function(){

			SampleMVC.mainA.show( new AppLayout1() );
			
		});
		
		return SampleMVC;
	
	}

);