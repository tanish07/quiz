// var query=window.location.search;
// var urlparam=new URLSearchParams(query);
// var value=urlparam.get('testid');
var k=window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) ;
var value=parseInt(window.location.href.slice( window.location.href.indexOf( '=' ) + 1 )) ;
// var cu_id = "id=" + value;
var api="http://localhost:8080/quiz_war/webapi/quiz/studentlist?"+k;
$.get(api, function (faculty, status) {
    // console.log(faculty);
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
        faculty_tests_list += " <thead> <tr> <th>Student Name</th> <th>Rollno</th><th>Course</th><th>Year</th><th>Marks</th></tr> </thead>";
        for (var i = 0; i < faculty.length; i++)
        {
            var q1="http://localhost:8080/quiz_war/HTML/displayAnswer.html?testid="+value+"&testaid="+faculty[i][6]+">";

            faculty_tests_list +=  '<tr><td><a href='+q1+'></a>'+faculty[i][1]+'</td>'
                +'<td>'+faculty[i][2]+'</td>'
                +'<td>'+faculty[i][3]+'</td>'
                +'<td>'+faculty[i][4]+'</td>'
                +'<td>'+faculty[i][5]+'</td></tr>';
        }
        $('#FacultyTable').append(faculty_tests_list);
    }
    $('#FacultyTable').DataTable();
});