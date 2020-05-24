 var id = JSON.parse(sessionStorage.getItem("id"));
 if(id != null) {
     var cu_id = "id=" + id;
     var api="http://localhost:8080/Student3_war/webapi/Student/getTimeTable?"+cu_id;
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
                 var q1="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testid="+student[i][0]+">";
                 var q2="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testaid="+student[i][4]+">";
                
                 student_tests_list +=  '<tr><td><a href='+q1+student[i][1] + '</a></td>'
                     + '<td>'+q2+student[i][2]+'</td>'
                     + '<td>'+q3+student[i][3]+ '</td></tr>';
             }
             $('#QuizTable').append(student_tests_list);
         }
         $('#QuizTable').DataTable();
     });
 }
 else
 {
     location.replace("http://localhost:8080/Student3_war/HTML/Login.html");
 }

