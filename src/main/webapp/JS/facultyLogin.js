function func() 
{
    var name = document.getElementById("faculty_name").value;
    var password = document.getElementById("password").value;
    var api = "/Student3_war/webapi/Student/login";
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
                sessionStorage.setItem("id", JSON.stringify(response));
                location.href="http://localhost:8080/Student3_war/HTML/Table.html";

            },
            404:    function()
            {
                alert("Username Not Found");
            }
            401:    function()
            {
                alert("Incorrect Password");
            }
        }
    });
}
