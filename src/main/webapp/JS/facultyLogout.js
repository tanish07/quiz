function logout()
{
	var id = sessionStorage.getItem("id");
    var api = "http://localhost:8080/quiz_war/webapi/quiz/facultylogout";
    var text =  {"id":id};

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
                location.replace("http://localhost:8080/quiz_war/HTML/homePage.html");
            }
        }
    });
}
