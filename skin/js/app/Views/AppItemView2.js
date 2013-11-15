define(

	[ 'marionette', 'app/vent', 'app/TemplateStr' ],
	
	function( Marionette, Vent, TemplateStr ){
	
		"use strict";
		
		console.log( 'ItemView2 Started!!' );

		return Marionette.ItemView.extend({
		
			template: _.template( TemplateStr.displayTemplate ),

			ui: {
				
				spanArea: '.DisplaySpan_1',
				
				// editText: '.EditText_1',
				
				buttonDelete: '.LogoutButton_1',
				
				// buttonEdit: '.EditButton_1',
				
			},
			
			events: {
			
				'click #LogoutButton_1': 'onLogoutBtnPress',
				
				/* 'mousedown .EditButton_1': 'onEditFocused',
				
				'keypress .EditButton_1': 'onEditFocused',
				
				'dblclick .DisplaySpan_1': 'onSpanClickAction',
				
				'keydown .EditText_1': 'onEditKeypress',
				
				'blur .EditText_1': 'onEditFocused1', */
				
			},
			
			onLogoutBtnPress: function () {
			
				if( confirm( 'Do you want to Logout?' ) ) {
					
					Vent.trigger( 'loginpage:intro' );
				
				}

			},
			
			/* onSpanClickAction: function () {
			
				this.ui.spanArea.hide();

				this.ui.buttonDelete.hide();
				
				this.ui.editText.show();
				
				this.ui.buttonEdit.show();
				
				this.ui.editText.focus();
				
				this.ui.editText.val( this.model.get( 'textmsg' ) );

			},
			
			onEditKeypress: function ( e ) {
			
				var ENTER_KEY = 13, ESC_KEY = 27, HOR_TAB = 9;

				var disp = this.ui.editText.val().trim();
				
				if ( e.which === ENTER_KEY && disp ) {
				
					this.onEditFocused();
					
				}
				
				else if ( e.which === ESC_KEY ) {
					
					this.onResetEditing();
					
				}
				
				else if( e.which === HOR_TAB ) {
		
					e.preventDefault();
					
					this.x = 1;
		
				}

			},
			
			onEditFocused: function () {
				
				var msgText = this.ui.editText.val().trim();
				
				if ( msgText ) {
				
					this.ui.editText.val( '' );
					
					this.listenTo( this.model, 'change', this.render, this );
					
					this.model.set( 'textmsg', msgText ).save();
					
					alert( 'Text : "' + msgText + '" updated to the Model' );
					
					this.ui.buttonDelete.show();
					
					this.ui.buttonEdit.hide();
					
					this.ui.spanArea.show();
					
					this.ui.editText.hide();
					
				} else {
				
					alert( 'No Text Available!!' );
					
				}
				
			},
			
			onResetEditing: function(){
			
				if( this.x === 0 ) {
				
					this.ui.buttonDelete.show();
					
					this.ui.buttonEdit.hide();
					
					this.ui.spanArea.show();
					
					this.ui.editText.hide();
				
				}
				
				else{
				
					this.x = 0;
				
				}
				
			},
			
			onEditFocused1: function( e ){
				
				
				
				if( this.x === 1 ){
				
					this.listenTo( this.$el, 'mouseleave', this.onResetEditing, this );
				
					this.ui.buttonEdit.focus();
					
					// this.listenTo( this.ui.buttonEdit, 'keypress', this.onEditFocused, this );
					
					// this.listenTo( this.ui.buttonEdit, 'mousedown', this.onEditFocused, this );
					
					// this.listenTo( this.$el, 'mouseout', this.onResetEditing, this );
					
					// console.log(this.$el);
					
					this.x = 0;
					
					// this.onResetEditing();
					
				}
				else{
				
					this.onResetEditing();
					
				}
				
				 // this.onResetEditing();
				 
				// this.listenTo( this.model, 'change', this.render, this );
				
			}, */
			
			initialize: function(){
				
				// this.x = 0;
				
				this.listenTo( this.model, 'change', this.render, this );
				
			}
		
		});
	}

);