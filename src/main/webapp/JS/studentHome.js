var id = JSON.parse(sessionStorage.getItem("id"));
 if(id != null) {
     var cu_id = "id=" + id;
     var api="http://localhost:8080/quiz_war/webapi/quiz/testlistbyuserid?"+cu_id;
     $.get(api, function (student, status) {
         console.log(student);
         if (status == "success") {
             var tab1 = JSON.parse(sessionStorage.getItem("table"));
             if(tab1 == null)
                sessionStorage.setItem("table", JSON.stringify(student));
             else
             {
                 sessionStorage.removeItem("table");
                 sessionStorage.setItem("table", JSON.stringify(student));
             }
             // var student_data_body = "";
             $("#QuizTable").html("");
             var student_tests_list = "";
             student_tests_list += " <thead> <tr> <th>Test Name</th> <th>Faculty Name</th>"+ 
             "<th>Marks</th></tr> </thead>";
             for (var i = 0; i < student.length; i++) 
             {
                 var q1="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testid="+student[i][0]+"?testaid="+student[i][4]+">";
                 // var q2="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testaid="+student[i][4]+">";
                
                 student_tests_list +=  '<tr><td><a href='+q1+student[i][1] + '</a></td>'
                     + '<td>'+student[i][2]+'</td>'
                     + '<td>'+student[i][3]+ '</td></tr>';
             }
             $('#QuizTable').append(student_tests_list);
         }
         $('#QuizTable').DataTable();
     });
 }
 else
 {
     location.replace("http://localhost:8080/quiz_war/HTML/studentLogin.html");
 }
function setFaculty() 
{
    var facultyname = document.getElementById("faculty_name").value;

    var api = "/Student3_war/webapi/Student/login";
    var text =  {"facultyname":facultyname};

    $.ajax
    ({
        type : "POST",
        url : api,
        data : text,
        async: false,
        cache: false,
        sessionStorage.setItem("facultyname", facultyname);
    });
    location.href="../HTML/searchFaculty.html";
}