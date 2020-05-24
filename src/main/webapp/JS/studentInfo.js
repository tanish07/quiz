 // var id = JSON.parse(sessionStorage.getItem("id"));
 // var name = JSON.parse(sessionStorage.getItem("name"));
 // var rollno = JSON.parse(sessionStorage.getItem("rollno"));
 // var course = JSON.parse(sessionStorage.getItem("course"));
 // var year = JSON.parse(sessionStorage.getItem("year"));
function StudentInfo()
{
    var id = JSON.parse(sessionStorage.getItem("id"));
    var name = JSON.parse(sessionStorage.getItem("name"));
    var rollno = JSON.parse(sessionStorage.getItem("rollno"));
    var course = JSON.parse(sessionStorage.getItem("course"));
    var year = JSON.parse(sessionStorage.getItem("year"));
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+name+"</li>";
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+rollno+"</li>";
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+course+"</li>";
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+year+"</li>";
}
window.onload = StudentInfo;
