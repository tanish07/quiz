var test=new Object();
var array=new Array();
function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var radios = form.elements[name];
    
    // loop through list of radio buttons
    for (var i=0, len=radios.length; i<len; i++) {
        if ( radios[i].checked ) { // radio checked?
            val = radios[i].value; // if so, hold its value in val
            break; // and break out of for loop
        }
    }
    return val; // return value of checked radio or undefined if none checked
}
function first(){
    var d=document.getElementById("testduration").value;
    var n=document.getElementById("testname").value;
    var p=document.getElementById("testpassword").value;
    test.facultyid = JSON.parse(sessionStorage.getItem("id"));
    test.duration=parseInt(d,10);
    test.name=n;
    test.password=p;
    sessionStorage.setItem("table", JSON.stringify(test));
}
function second(){
    var question = new Object();
    var m=document.getElementById("marks").value;;
    var mc=getRadioVal(document.getElementById('questionlist'), 'mcq');
    var q=document.getElementById("quest").value;
    var a=document.getElementById("ans").value;
    var o1=document.getElementById("opt1").value;
    var o2=document.getElementById("opt2").value;
    var o3=document.getElementById("opt3").value;
    var o4=document.getElementById("opt4").value;
    question.quest=q;
    question.answer=a;
    question.mcq=mc;
    question.marks=m;
    question.option1=o1;
    question.option2=o2;
    question.option3=o3;
    question.option4=o4;
    array.push(question);
    document.getElementById("questionlist").reset();
}

function submit1(){
    var d=document.getElementById("testduration").value;
    var n=document.getElementById("testname").value;
    var p=document.getElementById("testpassword").value;
    test.facultyid = JSON.parse(sessionStorage.getItem("id"));
    test.duration=d;
    test.name=n;
    test.password=p;
    test.questionlist=array;
    sessionStorage.setItem("table", JSON.stringify(test));
    var api = "http://localhost:8080/quiz_war/webapi/quiz/savetest";
    var text=JSON.stringify(test);
    $.ajax
    ({
        type : "POST",
        url : api,
        dataType:"json",
        contentType:"application/json",
        data : JSON.stringify(test),
        async: false,
        cache: false,
        statusCode:
            {
                200:	function(response)
                {
                    location.href="http://localhost:8080/quiz_war/HTML/facultyHome.html";

                }
            }
    });
}










// var questions=[];
// function myFunction() {
//     var elements = document.getElementById("questionlist").elements;
//     var obj ={};
//     for(var i = 0 ; i < elements.length-2 ; i++){
//         var item = elements.item(i);
//         obj[item.name] = item.value;
//     }

//    // document.getElementById("demo").innerHTML = JSON.stringify(obj);

    
//     questions.push(JSON.stringify(obj));
//     document.getElementById("questionlist").reset();
//     alert("Question was successfully added");
   


// }
    



