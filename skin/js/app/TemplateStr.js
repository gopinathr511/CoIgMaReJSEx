define(
	
	function( require ){

		"use strict";
		
		console.log( 'Templater Started!!' );
		
		return {
		
			layoutTemplate     : require( 'templ!app/Templates/layoutTemplate.tpl' ),
			
			dataTemplate     : require( 'templ!app/Templates/dataTemplate.tpl' ),
			
			displayTemplate     : require( 'templ!app/Templates/displayTemplate.tpl' ),
			
			regisTemplate     : require( 'templ!app/Templates/regnTemplate.tpl' ),
			
		};

	}

);
