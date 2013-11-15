<html>
<head>
<script>
function redCheck()
  {
  //document.getElementById("red").checked=true
  }
function check()
  {
  //document.getElementById("red").checked=true
  if(document.getElementById("red").checked==true )
  {
	alert("Red Checked");
  }
  else if(document.getElementById("blue").checked==true )
  {
	alert("Blue Checked");
  }
  else if(document.getElementById("green").checked==true )
  {
	alert("Green Checked");
  }
  }
function uncheck()
  {
  document.getElementById("red").checked=false
  document.getElementById("blue").checked=false
  document.getElementById("green").checked=false
  }
</script>
</head>
<body>

<form>
What color do you prefer?<br>
<input type="radio" name="colors" id="red" onclick="redCheck()">Red<br>
<input type="radio" name="colors" id="blue">Blue<br>
<input type="radio" name="colors" id="green">Green
</form>

<button type="button" onclick="check()">Check </button>
<button type="button" onclick="uncheck()">Uncheck</button>

</body>
</html> 