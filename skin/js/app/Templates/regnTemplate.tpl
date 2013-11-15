 <br />
 <span style="float:left" >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hai!!, Guest...</span>
<input type="button" value="Back" class="button" id="BackButton_1" style="float:right;margin-right:10%;width:55px;" />
<br/>
<center >
	<h2 style="width:60%" >User Registration Page</h2>
	<form method="post" id="regis_form" name="regis_form" >
		<div style="width:40%" id="fillerR" style="display:none;" ></div>
		
		<table border="0" >
		
			<tr >
				<td colspan='2' align="center" >
					<hr width='100%' />
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Full Name
				</td>
				
				<td class="inputTDClass" >
					<input type="text" id="first_name" name="first_name" placeholder="FullName" maxlength="30" class="inputElementClass" />
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Gender
				</td>
				
				<td class="inputTDClass" >
					<select id="gender_op" name="gender_op" class="inputElementClass" >
						<option value="Male" >Male</option>
						<option value="Female" >Female</option>
					</select>
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Age
				</td>
				
				<td class="inputTDClass" >
					<input type="text" id="age_now" name="age_now" placeholder="Age" maxlength="3" class="inputElementClass" />
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Address
				</td>
				
				<td class="inputTDClass" >
					<textarea name="resi_addr" id="resi_addr" rows="3" cols="30" placeholder="Address" maxlength="90" class="textAreaClass" ></textarea>
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Contact
				</td>
				
				<td class="inputTDClass" >
					<input type="text" id="contact_no" name="contact_no" placeholder="Contact" maxlength="15" class="inputElementClass" />
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					UserName
				</td>
				
				<td class="inputTDClass" >
					<input type="text" id="usernames" name="usernames" placeholder="UserName" maxlength="30" class="inputElementClass" />
					<div style="width:40%" id="userRs" style="display:none;" ></div>
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Password
				</td>
				
				<td class="inputTDClass" >
					<input type="password" id="passwords" name="passwords" placeholder="Password" maxlength="12" class="inputElementClass" />
					<div style="width:40%" id="passRs" style="display:none;" ></div>
				</td>
			</tr>
			
			<tr >
				<td class="inputLabelClass" >
					Retype Password
				</td>
				
				<td class="inputTDClass" >
					<input type="password" id="passwords1" name="passwords1" placeholder="Password" maxlength="12" class="inputElementClass" />
					<div style="width:40%" id="passmR" style="display:none;" ></div>
				</td>
			</tr>
			
			<tr >
				<td colspan='2' align="center" ></td>
			</tr>
			
			<tr >
				<td colspan='2' align="center" ><input type="button" value="Inside" class="button" id="Regist_Btn" name="Regist_Btn" /></td>
			</tr>
			
			<tr >
				<td colspan='2' align="center" ><hr width='100%' /></td>
			</tr>
			
		</table>
	</form>
</center>