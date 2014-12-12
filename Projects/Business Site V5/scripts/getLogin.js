function getForm(url){
	var info=url.split("?");
	var nameValuePairs=info[1].split("&");
	var $_GET = new Object;
	for(var i=0;i<nameValuePairs.length-1;i++){
		var map=nameValuePairs[i].split("=");
		var name=map[0];
		var value=map[1];
		$_GET[name]=value;
	}
	return $_GET;
}

function validate_Username(){
			var Arr = document.forms["createLogin"]["username"].value.match(/^[A-Za-z]+$/g);
			if(Arr != null){
				
				return true;
			}else{
				alert("Invalid Username Field");
				return false;
			}
	
		}
//VALIDATE EMAIL ADDRESS
		function validate_Email(){
			var Arr = document.forms["createLogin"]["email"].value.match(/^[A-Za-z0-9]+[@]([A-Za-z0-9]+[\.]?)+$/);
			if(Arr != null){
					return true;
			}else{
				alert("Invalid Email Field");
			return false;
			}
		}
//VALIDATE PASSWORD
		function validate_Password(){
			var Arr=document.forms["createLogin"]["password"].value.match(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!$%^&+@#$%]).{4,15})/);
			if(Arr != null){
				return true;
			}else{
				alert("Invalid Password Field");
				return false;
			}
		}	
			
//VALIDATE ENTIRE FORM!
	function validate_Form(){
		if(!validate_Username())return false;
		if(!validate_Email())return false;
		if(!validate_Password())return false;
		if(!validate_Password2())return false;
		return true;
	}	