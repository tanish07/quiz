function func()
{
	// alert("JSSSS");
	var id = document.getElementById("student_id").value;
	var pass = document.getElementById("password").value;
	
	//localStorage.setItem("student_id", id);

	xhr = new XMLHttpRequest();
	var url = "localhost:8080/Student3_war/webapi/Student/login";

	var text =  {"StudentId":id,"Password":pass};
	//obj = JSON.stringify(text);
	obj = text;

	try {  
			xhr.onreadystatechange=getInfo;  
			xhr.open("POST", url, true);  
		    xhr.send(obj);  
	}  
	catch(e) {  
		alert("Unable to connect to server");  
	}  

	xhr.onreadystatechange = function () { 
                if (xhr.readyState === 4 && xhr.status === 200) { 

                    // Print received data from server 
                    location.replace("../HTML/Table.html"); 
                } 
                else 
                {
                	document.getElementById("Error").innerHTML = '<div class="alert alert-danger alert-dismissible"'+ 
                	'fade show error id="Error">' +
                	"<strong>Error!</strong> Invalid Username or Password"+
    				'<button type="button" class="close" data-dismiss="alert">&times;</button></div>';
                }
            }; 
}  
