function func() {
    var id = document.getElementById("student_id").value;
    var pass = document.getElementById("password").value;
    var api = "/Student3_war/webapi/Student/login";
    var text =  {"StudentId":id,"Password":pass};
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
                200:	function(response)
                {
                                    sessionStorage.setItem("id", JSON.stringify(response));
                    location.href="http://localhost:8080/Student3_war/HTML/Table.html";

                },
                204:	function()
                {
                    alert("wrong Password");
                }
            }
    });

}