function FacultyInfo()
{
    var name = sessionStorage.getItem("name");
    var course = sessionStorage.getItem("course");
  document.getElementById("facultyInfo").children[0].innerHTML += "<li>"+name+"</li>";
  document.getElementById("facultyInfo").children[0].innerHTML += "<li>"+course+"</li>";
}
window.onload = FacultyInfo;