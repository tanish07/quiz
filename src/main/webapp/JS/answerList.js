var query=window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) ;
// var value11=window.location.href.substring(0)
// var value2=urlparam.get('testaid');
// var cu_id = "testid=" + value1 +"&testaid="+value2;
var api="http://localhost:8080/quiz_war/webapi/quiz/answerlist?"+query;
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
        faculty_tests_list += " <thead> <tr> <th>Question</th> <th>Option1</th><th>Option2</th><th>Option3</th><th>Option4</th><th>Answer</th><th>Performed</th><th>Marks</th></tr> </thead>";
        for (var i = 0; i < faculty.length; i++)
        {

            faculty_tests_list +=  '<tr><td>'+faculty[i][0]+'</td>'
                +'<td>'+faculty[i][2]+'</td>'
                +'<td>'+faculty[i][3]+'</td>'
                +'<td>'+faculty[i][4]+'</td>'
                +'<td>'+faculty[i][5]+'</td>'
                +'<td>'+faculty[i][6]+'</td>'
                +'<td>'+faculty[i][7]+'</td>'
                +'<td>'+faculty[i][8]+'</td></tr>';
        }
        $('#FacultyTable').append(faculty_tests_list);
    }
    $('#FacultyTable').DataTable();
});