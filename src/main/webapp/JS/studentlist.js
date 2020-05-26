
 var id = JSON.parse(sessionStorage.getItem("id"));
 if(id != null) {
     var cu_id = "id=" + id;
     // var api = "/Student3_war/webapi/Student/getTimeTable/" + id;
     var api="http://localhost:8080/quiz_war/webapi/quiz/getTimeTable?"+cu_id;
     $.get(api, function (student, status) {
         console.log(student);
         // alert("In studentlisttt ");
         if (status == "success") {
             // var student=JSON.parse(s);
             var tab1 = JSON.parse(sessionStorage.getItem("table"));
             if(tab1 == null)
             sessionStorage.setItem("table", JSON.stringify(student));
             else
             {
                 sessionStorage.removeItem("table");
                 sessionStorage.setItem("table", JSON.stringify(student));
             }
             // var student_data_body = "";
             $("#TimeTable").html("");
             var student_data_body = "";
             student_data_body += " <thead> <tr> <th>Time</th> <th>Monday</th> <th>Tuesday</th> <th>Wednesday</th> <th>Thursday</th> <th>Friday</th> <th>Saturday</th> </tr> </thead>";
             for (var i = 0; i < 4; i++) {
//            var domainName = student[i].domain.discipline + " " + student[i].domain.branch;
//            var photograph = '<img src="' + student[i].photograph + '" height="80" alt="' + student[i].rollNumber + '">'
                 if(i==0)
                 {
                     student_data_body += '<tr>'
                         + '<td>' +"9.15 to 10.45"+ '</td>';
                 }
                 else if(i==1)
                 {
                     student_data_body += '<tr>'
                         + '<td>' +"11:00 to 12.30"+ '</td>';
                 }
                 else if(i==2)
                 {
                     student_data_body += '<tr>'
                         + '<td>' +"2:00 to 3:30"+ '</td>';

                 }
                 else
                 {
                     student_data_body += '<tr>'
                         + '<td>' +"3.30 to 5:00"+ '</td>';
                 }
                 var q1="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="+student[i][0]+">";
                 var q2="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="+student[i][1]+">";
                 var q3="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="+student[i][2]+">";
                 var q4="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="+student[i][3]+">";
                 var q5="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="+student[i][4]+">";
                 var q6="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="+student[i][5]+">";
                 student_data_body +=  '<td><a href='+q1+student[i][0] + '</a></td>'
                     + '<td><a href='+q2+student[i][1] + '</a></td>'
                     + '<td><a href='+q3+student[i][2] + '</a></td>'
                     + '<td><a href='+q4+student[i][3] + '</a></td>'
                     + '<td><a href='+q5+student[i][4] + '</a></td>'
                     + '<td><a href='+q6+student[i][5] + '</a></td>'
                     + '</tr>';
             }
             $('#TimeTable').append(student_data_body);
         }
         $('#TimeTable').DataTable();
     });
 }
 else
 {
     location.replace("http://localhost:8080/Student3_war/HTML/Login.html");
 }

