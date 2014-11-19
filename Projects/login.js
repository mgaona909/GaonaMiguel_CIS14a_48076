// JavaScript Document
var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if ( username == "Formget" && password == "formget#123"){
		alert ("Login successfully");
		window.location = "success.html"; // Redirecting to other page.
		return false;
	}
	else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
			document.getElementById("username").disabled = true;	
			document.getElementById("password").disabled = true;
			document.getElementById("submit").disabled = true;
			return false;
		}
	}
}



function setLogin(){
	//First we set the cookie date to a year hence.
	var now= new Date();
	now.setTime(now.getTime() + 365 * 24 * 60 * 60 * 1000);
	//We call the function GetCookie() with the name, "username".
	var username = GetCookie("username");
	if ((!username)||(username=='null')) { 
		username = prompt("Please enter your name:", "");
	}
	setCookie("username", username, now);
	if (username) {
		document.write(username);
		setCookie("username", username, now);
	}
	else{
	document.write("You didn\'t enter your name.<a href=# onClick=\"MyNamer();history.go(-1)\">Enter it now?</a>");
	}
}