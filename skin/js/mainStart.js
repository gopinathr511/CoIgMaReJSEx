require.config({
		
	//baseUrl: '<?php echo base_url("skin/js");?>',
	
	paths: {
	
		jquery: 'lib/jquery-1.9.1',
		
		json2: 'lib/json2',
		
		underscore: 'lib/underscore-1.4.4',
		
		lodash: 'lib/lodash-1.3.1',
		
		backbone: 'lib/backbone-1.0.0',
		
		marionette: 'lib/backbone-marionette-1.0.3',
		
		templ: 'lib/requirejs-text-2.1.6',
		
		// localstorage: 'lib/backbone-localStorage',
		
	},
	
	shim: {
		
		backbone : {
		
			exports : 'Backbone',
			
			deps : [ 'jquery','underscore' ],
			
		},
		
		marionette : {
		
			exports : 'Marionette',
			
			deps : [ 'backbone' ],
			
		},
		
		// 'lib/backbone.localStorage' : [ 'underscore', 'backbone' ],
		
	},
	
	deps : [ 'jquery','underscore' ],
	
	waitSeconds : 200,
	
	callback: function(){
	
		console.log( 'Dependency Solved!!' );
		
	}

});

require(

	[ 'backbone', 'app/SampleMVC', 'app/Routers/sampleRouter', 'app/Controllers/sampleController' ],
	
	function( Backbone, SampleMVC, Router, Controller ){

		"use strict";
		
		console.log( 'Application Started!!' );
		
		new Router({
		
			controller : Controller
			
		});
		
		SampleMVC.start();
		
		Backbone.history.start( { pushState: true } );
	  
	}

);
