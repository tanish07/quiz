var user = JSON.parse(sessionStorage.getItem("id"));
if(id != null) {
su_id="id="+id
// var api = "/Student3_war/webapi/getSubject/"+id;
    var api="http://localhost:8080/Student3_war/webapi/Student/getSubject?"+su_id;
$.get(api, function (domain, status) {
    console.log(domain);
    if (status == "success") {
        $("#course_list").html("");
        var domainOptions = "";
        for (var i = 0; i < domain.length; i++) {
            domainOptions += '<button class="btn btn-light sub" onclick="sub_update(id)" id="'+domain[i]
            +'">'+domain[i]+'</button>'
         }
        $("#course_list").append(domainOptions);
    }
});
}
else
{
    location.replace("http://localhost:8080/Student3_war/HTML/Login.html");
}
function sub_update(c_id)
{
    // alert(c_id);
    var student = JSON.parse(sessionStorage.getItem("table"));
    // console.log(tab);
    var ch="ALL COURSES";
    if(c_id.toUpperCase()==="ALL COURSES")
    {
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
            student_data_body +=  '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][0]+">"+student[i][0] + '</a></td>'
                + '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][1]+">"+student[i][1] + '</a></td>'
                + '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][2]+">"+student[i][2] + '</a></td>'
                + '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][3]+">"+student[i][3] + '</a></td>'
                + '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][4]+">"+student[i][4] + '</a></td>'
                + '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][5]+">"+student[i][5] + '</a></td>'
                + '</tr>';
        }
        $('#TimeTable').append(student_data_body);
    $('#TimeTable').DataTable();
    }
    else
    {
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
            else if(i===1)
            {
                student_data_body += '<tr>'
                    + '<td>' +"11:00 to 12.30"+ '</td>';
            }
            else if(i===2)
            {
                student_data_body += '<tr>'
                    + '<td>' +"2:00 to 3:30"+ '</td>';

            }
            else
            {
                student_data_body += '<tr>'
                    + '<td>' +"3.30 to 5:00"+ '</td>';
            }
            // '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' + student[i][0]+">"+student[i][0] + '</a></td>'
            // student_data_body +=  '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' ;
            if(student[i][0].toUpperCase()===c_id.toUpperCase())
                student_data_body += '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' +student[i][0]+">"+student[i][0] + '</a></td> ';
            else
                student_data_body +=   '<td> NANA </td> ';

            if(student[i][1].toUpperCase()===c_id.toUpperCase())
                student_data_body += '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' +student[i][1]+">"+student[i][1] + '</a></td> ';
            else
                student_data_body +=   '<td> NANA </td> ';
            if(student[i][2].toUpperCase()===c_id.toUpperCase())
                student_data_body += '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' +student[i][2]+">"+student[i][2] + '</a></td> ';
            else
                student_data_body +=   '<td> NANA </td> ';
            if(student[i][3].toUpperCase()===c_id.toUpperCase())
                student_data_body += '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' +student[i][3]+">"+student[i][3] + '</a></td> ';
            else
                student_data_body +=   '<td> NANA </td> ';
            if(student[i][4].toUpperCase()===c_id.toUpperCase())
                student_data_body += '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' +student[i][4]+">"+student[i][4] + '</a></td> ';
            else
                student_data_body +=   '<td> NANA </td> ';
            if(student[i][5].toUpperCase()===c_id.toUpperCase())
                student_data_body += '<td><a href="http://localhost:8080/Student3_war/HTML/FacultyInfo.html?cname="' +student[i][5]+">"+student[i][5] + '</a></td> ';
            else
                student_data_body +=   '<td> NANA </td> ';
        }
        $('#TimeTable').append(student_data_body);
        $('#TimeTable').DataTable();
    }
}