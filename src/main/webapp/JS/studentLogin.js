function func() 
{
    var rollno = document.getElementById("student_id").value;
    var password = document.getElementById("password").value;
    var api = "http://localhost:8080/quiz_war/webapi/quiz/studentlogin";
    var text =  {"rollno":rollno,"password":password};
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
                var intValue=parseInt(response[0]);
                sessionStorage.setItem("id", JSON.stringify(intValue));
                sessionStorage.setItem("rollno", JSON.stringify(response[1]));
                sessionStorage.setItem("name", JSON.stringify(response[2]));
                sessionStorage.setItem("dob", JSON.stringify(response[3]));
                sessionStorage.setItem("course", JSON.stringify(response[4]));
                sessionStorage.setItem("year", JSON.stringify(response[5]));
                location.href="http://localhost:8080/quiz_war/HTML/studentHome.html";

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