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