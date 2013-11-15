define(

	[ 'marionette', 'app/vent', 'app/TemplateStr' ],
	
	function( Marionette, Vent, TemplateStr ){
	
		"use strict";
		
		console.log( 'RegView Started!!' );

		return Marionette.ItemView.extend({
		
			template: _.template( TemplateStr.regisTemplate ),

			ui: {
				
				fullName: '#first_name',
				
				genderOp: '#gender_op',
				
				ageNow: '#age_now',
				
				resiAddr: '#resi_addr',
				
				contactNo: '#contact_no',
				
				userNames: '#usernames',
				
				userAlert: '#userRs',
				
				passwords: '#passwords',
				
				passAlert: '#passRs',
				
				passwords1: '#passwords1',
				
				passMAlert: '#passmR',
				
				fillerAlert: '#fillerR',
				
			},
			
			events: {
			
				'click #BackButton_1': 'onBackBtnPress',
				
				'click #Regist_Btn': 'onRegisBtnPress',
				
				'keyup #age_now': 'onAgerKeypress',
				
				'blur #age_now': 'onAgerKeypress',
				
				'keyup #contact_no': 'onConteKeypress',
				
				'blur #contact_no': 'onConteKeypress',
				
				'keyup #usernames': 'onUserChBlur',
				
				'blur #usernames': 'onUserChBlur',
				
				'blur #passwords': 'onPassChBlur',
				
				'blur #passwords1': 'onPassMBlur',
				
			},
			
			onBackBtnPress: function () {
				
				Vent.trigger( 'loginpage:intro' );

			},
			
			onRegisBtnPress: function () {
			
				if ( this.isAllRequired() && ( this.usho == 1 && this.paho == 1 && this.pmho == 1 ) ){
				
					this.ui.fillerAlert.html( '' );
					
					this.ui.fillerAlert.hide();
					
					var datr = this.getRecordArrays();
					
					var that = this;
					
					$.ajax({
						
						url     : 'index.php/MainControl/mainController/regnDetails',
						
						type    : 'POST',
						
						data    : datr,
						
						timeout : 30000,
						
						success : function( response_data, text, xhrobject ) {
						
							var response = JSON.parse( response_data );
							
							if( response[ 'result' ] == 'success' ) {
								
								that.model.set( 'loginResult', 'true' );
					
								that.model.set( 'loginUser', response[ 'userName' ] );
								
								Vent.trigger( 'loginpage:message', that.model );
								
							} else if( response[ 'result' ] == 'failure' ) {
								
								that.model.set( 'loginResult', 'false' );
								
							}
							
						}
						
					});
				
				} else {
			
					this.ui.fillerAlert.show();
					
					this.ui.fillerAlert.html( '<b >Some Inputs are Invalid or Empty!!</b>' );
					
					this.ui.fillerAlert.addClass( 'failResult' );
				
				}

			},
			
			onAgerKeypress: function () {
				
				this.numerChecker( this.ui.ageNow, 'v', 125 );

			},
			
			onConteKeypress: function () {
				
				this.numerChecker( this.ui.contactNo );

			},
			
			onUserChBlur: function () {
				
				this.usernameChecker( this.ui.userNames, this.ui.userAlert );

			},
			
			onPassChBlur: function () {
				
				this.passwordChecker( this.ui.passwords, this.ui.passAlert, 6 );
				
				this.passwordMatchChecker( this.ui.passwords1, this.ui.passwords, this.ui.passMAlert );

			},
			
			onPassMBlur: function () {
				
				this.passwordMatchChecker( this.ui.passwords1, this.ui.passwords, this.ui.passMAlert );

			},
			
			usernameChecker: function( userT, userMe ) {
			
				var se = userT.val();
				
				if( ( se == '' ) || ( se == null ) ) {
					
					userMe.html( '' );
				
					userMe.hide();
				
					this.usho = 0;
					
					userT.attr('style','background:#535556');
					
				} else {
					
					var datr = {
					
						'usernames' : se
					
					};
					
					var that = this;
					
					$.ajax({
						
						url     : 'index.php/MainControl/mainController/usernameChecker',
						
						type    : 'POST',
						
						data    : datr,
						
						timeout : 30000,
						
						success : function( response_data, text, xhrobject ) {
						
							var response = JSON.parse( response_data );
							
							if( response[ 'result' ] == 'success' ) {
							
								that.usho = 1;
						
								userMe.show();
								
								userMe.html( '<b >UserName Available!!</b>' );
								
								userT.attr( 'style', 'background:#2D5429' );
								
								userMe.removeClass( 'failResult' );
								
								userMe.addClass( 'succResult' );
								
							} else if( response[ 'result' ] == 'failure' ) {
							
								that.usho = 2;
						
								userMe.show();
								
								userMe.html( '<b >UserName Unavailable!!</b>' );
								
								userT.attr( 'style', 'background:#821E17' );
								
								userMe.removeClass( 'succResult' );
								
								userMe.addClass( 'failResult' );
								
							}
							
						}
						
					});
					
				}
			
			},
			
			numerChecker: function ( elem, ty, v ) {
				
				var sal = elem.val().trim();
				
				var tem = '';
				
				var numli = '0123456789';
				
	            var x1 = numli.length;
				
				var y1 = sal.length;
				
				for( var i = 0; i < y1; i++ ){
				
					var f = 0;
					
					for( var j = 0; j < x1; j++ ){
					
						if( numli.charAt( j ) != sal.charAt( i ) ) {
						
							f += 1;
							
						}
						
					}
					
					if( f < x1){
					
						tem += sal.charAt( i );
						
					}
					
				}
				
				if( ( ty == 'v' ) && ( parseInt( tem ) > v ) ) {
					
					tem = v;
					
				}
				
				elem.val( tem );

			},
			
			passwordChecker: function ( passT, passMe, passLe ) {
				
				var pass1 = passT.val();
				
				if( ( pass1 == '' ) || ( pass1 == null ) ) {
				
					passMe.html( '' );
					
					passMe.hide();
					
					this.paho = 0;
					
					passT.attr('style','background:#535556');

					
				} else {
					
					if( pass1.length < passLe ) {
						
						this.paho = 2;
						
						passMe.show();
						
						passMe.html( '<b >Password must have atleast ' + passLe + ' Characters!!</b>' );
						
						passT.attr( 'style', 'background:#821E17' );
						
						passMe.removeClass( 'succResult' );
						
						passMe.addClass( 'failResult' );
				
					} else {
						
						this.paho = 1;
						
						passMe.html( '' );
						
						passMe.hide();
						
						passT.attr( 'style', 'background:#2D5429' );
						
						passMe.removeClass( 'failResult' );
						
						passMe.addClass( 'succResult' );
						
					}
					
				}

			},
			
			passwordMatchChecker: function ( passR, passT, passMe ) {
				
				var pass1 = passT.val();
				
				var pass2 = passR.val();
					
				if ( ( pass2 == '' ) || ( pass2 == null ) ){
				
					passMe.html( '' );
					
					passMe.hide();
					
					this.pmho = 0;
					
					passR.attr('style','background:#535556');
					
				} else {
				
					if ( pass1 == pass2 ) {
					
						this.pmho = 1;
						
						passMe.html( '' );
						
						passMe.hide();
						
						passR.attr( 'style', 'background:#2D5429' );
						
						passMe.removeClass( 'failResult' );
						
						passMe.addClass( 'succResult' );
						
					} else {
					
						this.pmho = 2;
						
						passMe.show();
						
						passMe.html( '<b >Password Mismatch!!</b>' );
						
						passR.attr( 'style', 'background:#821E17' );
						
						passMe.removeClass( 'succResult' );
						
						passMe.addClass( 'failResult' );

					}

				}

			},
			
			isAllRequired: function () {
				
				var xTot = 6;
				
				var xva = this.isEmptOr( this.ui.fullName ) + this.isEmptOr( this.ui.ageNow ) + this.isEmptOr( this.ui.resiAddr );
				
				xva += this.isEmptOr( this.ui.contactNo ) + this.isEmptOr( this.ui.userNames ) + this.isEmptOr( this.ui.passwords );
				
				if( xva < xTot ) {
						
					return false;
			
				} else {
					
					return true;
				
				}

			},
			
			isEmptOr: function ( emp ) {
				
				var valu = emp.val();
				
				if ( ( valu == '' ) || ( valu == null ) ){
				
					return 0;
					
				} else {
				
					return 1;
				
				}

			},
			
			getRecordArrays: function () {
				
				var recArray = {
				
					'first_name' : this.ui.fullName.val(),
					
					'gender_op' : this.ui.genderOp.val(),
					
					'age_now' : this.ui.ageNow.val(),
					
					'resi_addr' : this.ui.resiAddr.val(),
					
					'contact_no' : this.ui.contactNo.val(),
					
					'usernames' : this.ui.userNames.val(),
					
					'passwords' : this.ui.passwords.val(),
				
				};
				
				var loginArr = {
				
					'usernames' : this.ui.userNames.val(),
					
					'passwords' : this.ui.passwords.val(),
				
				};
				
				var recArr = {
				
					'tableData1' : recArray,
					
					'tableData2' : loginArr,
				
				};
				
				return recArr;

			},
			
			initialize: function(){
				
				this.usho = 0;
				
				this.paho = 0;
				
				this.pmho = 0;
				
			}
		
		});
	}

);