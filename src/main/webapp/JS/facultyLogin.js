function func() 
{
    var name = document.getElementById("faculty_id").value;
    var password = document.getElementById("password").value;
    var api = "http://localhost:8080/quiz_war/webapi/quiz/facultylogin";
    var text =  {"name":name,"password":password};
    console.log(text);
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
                sessionStorage.setItem("name", JSON.stringify(response[1]));
                sessionStorage.setItem("dob", JSON.stringify(response[2]));
                sessionStorage.setItem("course", JSON.stringify(response[3]));
                location.href="http://localhost:8080/quiz_war/HTML/facultyHome.html";

            },
            406:    function()
            {
                alert("Already Login");
            },
            401:    function()
            {
                alert("Password Not Matched");
            },
            204:    function()
            {
                alert("Rollno not found");
            }
        }
    });
}