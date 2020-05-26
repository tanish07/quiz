function StudentInfo()
{
    var name = sessionStorage.getItem("name");
    var rollno = sessionStorage.getItem("rollno");
    var course = sessionStorage.getItem("course");
    var year = sessionStorage.getItem("year");
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+name+"</li>";
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+rollno+"</li>";
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+course+"</li>";
  document.getElementById("studentInfo").children[0].innerHTML += "<li>"+year+"</li>";
}
window.onload = StudentInfo;