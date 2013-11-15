define(

	[ 'marionette', 'app/vent', 'app/TemplateStr' ],
	
	function( Marionette, Vent, TemplateStr ){
	
		"use strict";
		
		console.log( 'ItemView1 Started!!' );
		
		return Marionette.ItemView.extend({
		
			template: _.template( TemplateStr.dataTemplate ),

			ui: {
			
				usern: '#UserName_1',
				
				passw: '#PassWord_1',
				
			}, 

			events: {
			
				'click #LoginButton_1': 'onClickFocusout',
				
				'keypress #LoginButton_1': 'onClickFocusout',
				
				'click #ResetButton_1': 'onClickResetout',
				
				'keypress #ResetButton_1': 'onClickResetout',
				
				'click #RegisButton_1': 'onClickRegis',
				
				'keypress #RegisButton_1': 'onClickRegis',
				
			},

			onClickFocusout: function () {
				
				var userName = this.ui.usern.val().trim();
				
				var passWord = this.ui.passw.val().trim();
				
				// var eve = Vent.eventCreator;
				
				var that = this;
				
				if ( userName && passWord ) {
				
					var datr = {
					
						'usernames' : userName,
						
						'passwords' : passWord
					
					};
					
					$.ajax({
					
						url     : 'index.php/MainControl/mainController/loginChecker',
						
						type    : 'POST',
						
						data    : datr,
						
						timeout : 30000,
						
						success : function( response_data, text, xhrobject ) {
						
							var response = JSON.parse( response_data );
							
							if( response[ 'result' ] == 'success' ) {
							
								alert( 'Valid Login Information!!' );
								
								that.model.set( 'loginResult', 'true' );
					
								that.model.set( 'loginUser', response[ 'userName' ] );
								
								Vent.trigger( 'loginpage:message', that.model );
								
							} else if( response[ 'result' ] == 'failure' ) {
							
								alert( 'Invalid Login Information!!' );
								
								that.model.set( 'loginResult', 'false' );
								
							}
							
							console.log( response + ' - From Trigger' );
							
						}
						
					});
					
				} else {
				
					alert( 'Invalid UserName and/or Password!!' );
					
				}
				
				this.onClickResetout();
				
			},
			
			onClickResetout: function () {
			
				this.ui.usern.val('');
				
				this.ui.passw.val('');
				
				this.ui.usern.focus();

			},
			
			onClickRegis: function () {
				
				Vent.trigger( 'regispage:intro', this.model );

			},
			
			initialize: function(){
				
			}
		
		});
	
	}

);