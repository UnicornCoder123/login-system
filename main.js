function clicked() {
	
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	
	var coruser = "MagicalUnicornCoder";
	var corpass = "194763";
	
	if(user.value == coruser) {
		
		if(pass.value == corpass){
			
			alert("You are logged in as" + user.value);
			
		} else {
			
			alert("Incorrect username or password!");
			
		}
		
	} else {
		
		alert("Incorrect username or password!");
		
	}
	
	
};