
		function validateCredential()
		{
			var email = document.getElementById("enteredEmail").value;
			var pass1=document.getElementById("enteredPass").value;
			var pass2=document.getElementById("enteredRepeatPass").value;
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			
			if(email=="" || pass1=="" || pass2=="")
			{
				alert("Incomplete Credentials");
			}	  
			else{
				if(mailformat.test(email)==true)
				{
					if(pass1!=pass2)
					{
						alert("SignUp Unsuccessful. Password didn't match.");
						document.getElementById('id02').style.display;	
					}
					else{
						alert("SignUp Successful."); 
					}
				}	
				else
				{
					alert("Invalid EmailID"); 
				}
			}			
		}
