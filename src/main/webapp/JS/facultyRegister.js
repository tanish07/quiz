function Student() 
{ 
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value; 
  
    if (password1 != password2) 
    { 
        alert ("\nPasswords did not match: Please try again..."); 
        return false;
    } 

    else
    { 
        alert ("\nRegistered Successfully"); 

        var name = document.getElementById('name').value;
        var dob = document.getElementById('dob').value;
        var course = document.getElementById('course').value;

        var api = "/Student3_war/webapi/Student/login";
        var text =  {"name":name,"dob":dob,"course":course,
                    "password":password1};
        // console.log(text);
        $.ajax
        ({
            type : "POST",
            url : api,
            data : text,
            async: false,
            cache: false,
            statusCode:
            {
                200:    function(response)
                {
                    sessionStorage.setItem("id", JSON.stringify(response[0]));
                    sessionStorage.setItem("name", JSON.stringify(response[2]));
                    sessionStorage.setItem("dob", JSON.stringify(response[3]));
                    sessionStorage.setItem("course", JSON.stringify(response[4]));
                    //location.href="../HTML/studentHome.html";
                }
            }
        });
        // document.getElementById("div1").innerHTML += "<p>"+name+"</p>";
        return true;
        window,location = "../HTML/facultyHome.html";
    } 
}