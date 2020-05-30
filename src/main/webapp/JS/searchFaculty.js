var name = JSON.parse(sessionStorage.getItem("facultyname"));
// var ftable;
 if(name != null) {
     var cu_id = "name=" + name;
     var api="http://localhost:8080/quiz_war/webapi/quiz/testlistbyfacultyname?"+cu_id;
     $.get(api, function (faculty, status) {
         // ftable=faculty;
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
             var table=document.getElementById('QuizTableFaculty');
             var arr1=new Array();
             arr1=['Test Name','Duration','Password',''];
             var tr=table.insertRow(-1);
             for(var i=0;i<=3;i++)
             {
                 var th=document.createElement('th');
                 th.innerHTML=arr1[i];
                tr.appendChild(th);
             }
             var indexA=new Array();
             for (var i11 = 0; i11 < faculty.length; i11++)
             {
                 indexA.push(i11-1);
             }
             indexA.forEach(function (id,value)
             {
                 tr=table.insertRow(-1);
                 // var q1="http://localhost:8080/Student3_war/HTML/performTest.html?testid="+faculty[i][0]+">";
                 var a=document.createElement('th');
                 // a.href=q1;
                 a.innerHTML=faculty[value][1];
                 tr.appendChild(a);
                 var th1=document.createElement('th');
                 th1.innerHTML=faculty[value][4];
                 tr.appendChild(th1);
                 if(faculty[value][2] == 'false')
                 {
                     var input=document.createElement('input');
                     input.type="password";
                     input.placeholder="Enter Password";
                     input.id="input"+value;
                     tr.appendChild(input);
                     var btn=document.createElement('button');
                     btn.innerHTML='Attempt Test';
                     btn.style="text-align: center;";
                     // var pswd=faculty[i][3];
                     btn.onclick=function () {
                         var tab11 = JSON.parse(sessionStorage.getItem("table"));
                         var password = document.getElementById("input"+value).value;
                         sessionStorage.setItem("i1", JSON.stringify(value));
                         sessionStorage.setItem("p", password);
                         if (password != tab11[value][3])
                         {
                             alert("Incorrect Password");
                         }
                         else
                         {
                             var intValue=parseInt(tab11[value][0]);
                             sessionStorage.setItem("testid", JSON.stringify(intValue));
                             location.replace("http://localhost:8080/quiz_war/HTML/attemptQuiz.html");
                         }
                     };
                     tr.appendChild(btn);
                 }
                 else
                 {
                     var th2=document.createElement('th');
                     tr.appendChild(th2);
                     var btn=document.createElement('button');
                     btn.innerHTML='Attempt Test';
                     btn.id="button"+value;
                     btn.style="text-align: center;";
                     btn.onclick=function () {
                         var tab11 = JSON.parse(sessionStorage.getItem("table"));
                         sessionStorage.setItem("testid", JSON.stringify(tab11[value][0]));
                             location.replace("http://localhost:8080/quiz_war/HTML/attemptQuiz.html");
                     };
                     tr.appendChild(btn);
                 }
             }
             );


             // $("#QuizTableFaculty").html("");
             // var faculty_tests_list = "";
             // faculty_tests_list += " <thead> <tr> <th>Test Name</th> <th>Duration</th>"+
             // "<th>Password</th><th></th></tr> </thead>";
             // for (var i = 0; i < faculty.length; i++)
             // {
             //    var q1="http://localhost:8080/Student3_war/HTML/performTest.html?testid="+faculty[i][0]+">";
             //
             //    faculty_tests_list +=  '<tr><td><a href='+q1+'</a>'+faculty[i][1]+'</td>';
             //     faculty_tests_list +=  '<td>'+faculty[i][4]+'</td>';
             //    if(faculty[i][2] == 'false')
             //    {
             //        faculty_tests_list += '<td><input type="password" id=pass"'+i+'" placeholder="Enter Password"></td>';
             //    }
             //    else
             //    {
             //        faculty_tests_list += '<td></td>';
             //    }
             //     faculty_tests_list +=   + '<td>'+faculty[i][4]+'</td>'
             //         + '<td style="text-align: center;">'
             //         + '<button class="btn btn-sm btn-primary"   onclick="CheckPassword(i);">Attempt Test</button></td></tr>';
             // }
             // $('#QuizTableFaculty').append(faculty_tests_list);
         }
         // $('#QuizTableFaculty').DataTable();
     });
 }
 else
 {
     location.replace("http://localhost:8080/quiz_war/HTML/studentLogin.html");
 }

 function CheckPassword(i) 
 {
    var password = document.getElementById("pass"+i).value;
    if (password != faculty[i][3]) 
    {
        alert("Incorrect Password");
    }
    else
    {
        location.replace("http://localhost:8080/quiz_war/HTML/.html");
    }
 }
