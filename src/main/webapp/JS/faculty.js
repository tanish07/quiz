
var id = JSON.parse(sessionStorage.getItem("id"));
if(id != null)
{
    var k=window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) ;
    var cu_id = "cname=" + k;
    // var api = "/Student3_war/webapi/Student/getTimeTable/" + id;
    var api="http://localhost:8080/Student3_war/webapi/Student/getFaculty?"+cu_id;
    $.get(api, function (student, status) {
        console.log(student);
        // alert("In studentlisttt ");
        if (status == "success") {
            // var student=JSON.parse(s);
            var tab1 = JSON.parse(student);

            $('#name').append(tab1.name);
            $('#details').append(tab1.details);
            // $('#details').DataTable();
        }
    });
}
else
{
    location.replace("http://localhost:8080/Student3_war/HTML/Login.html");
}
