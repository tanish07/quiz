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
             $("#QuizTableFaculty").html("");
             var faculty_tests_list = "";
             faculty_tests_list += " <thead> <tr> <th>Test Name</th> <th>Duration</th>"+ 
             "<th>Password</th><th></th></tr> </thead>";
             for (var i = 0; i < faculty.length; i++) 
             {
                var q1="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testid="+faculty[i][0]">";
                 // var q2="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?testaid="+student[i][4]+">";
                
                faculty_tests_list +=  '<tr><td><a href='+q1+faculty[i][1] + '</a></td>';
                if(faculty[i][2] == 'true')
                {
                    faculty_tests_list += '<td><input type="password" id="testpass" placeholder="Enter Password"></td>';
                }
                else
                {
                    faculty_tests_list += '<td></td>';
                }
                 faculty_tests_list +=   + '<td>'+faculty[i][4]+'</td>'
                     + '<td style="text-align: center;">'
                     + '<button class="btn btn-sm btn-primary" onclick="CheckPassword();">Attempt Test</button></td></tr>';
             }
             $('#QuizTableFaculty').append(faculty_tests_list);
         }
         $('#QuizTableFaculty').DataTable();
     });
 }
 else
 {
     location.replace("http://localhost:8080/quiz_war/HTML/studentLogin.html");
 }

 function CheckPassword() 
 {
    var password = document.getElementById(testpass).value;
    if (password != faculty[i][3]) 
    {
        alert("Incorrect Password");
    }
    else
    {
        location.replace("#");
    }
 }
