    
var id = JSON.parse(sessionStorage.getItem("id"));
if(id != null) {
var cu_id = "id=" + id;
var api="http://localhost:8080/quiz_war/webapi/quiz/testlistbyuserid?"+cu_id;
$.get(api, function (faculty, status) {
 console.log(faculty);
 if (status == "success") {
     var tab1 = JSON.parse(sessionStorage.getItem("table"));
     if(tab1 == null)
        sessionStorage.setItem("table", JSON.stringify(faculty));
     else
     {
         sessionStorage.removeItem("table");
         sessionStorage.setItem("table", JSON.stringify(faculty));
     }
     // var student_data_body = "";
     $("#FacultyTable").html("");
     var faculty_tests_list = "";
     faculty_tests_list += " <thead> <tr> <th>Test Name</th> <th>Duration</th></tr> </thead>";
     for (var i = 0; i < faculty.length; i++) 
     {
        var q1="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testid="+faculty[i][0]">";
        
        faculty_tests_list +=  '<tr><td><a href='+q1+'></a>'+faculty[i][1]+'</td>'
                                +'<td>'+faculty[i][2]+'</td>';
     }
     $('#FacultyTable').append(faculty_tests_list);
 }
 $('#FacultyTable').DataTable();
});
}
else
{
 location.replace("http://localhost:8080/quiz_war/HTML/facultyLogin.html");
}
