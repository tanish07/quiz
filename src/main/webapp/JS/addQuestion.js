var test=new Object();
var array=new Array();
function first(){
    var d;
    var n;
    var p;
    test.facultyid = JSON.parse(sessionStorage.getItem("id"));
    test.duration=d;
    test.name=n;
    test.password=p;
}
function second(){
    var question = new Object();
    var m;
    var mc;
    var q;
    var a;
    var o1;
    var o2;
    var o3;
    var o4;
    question.quest=q;
    question.answer=a;
    question.mcq=mc;
    question.marks=m;
    question.option1=o1;
    question.option2=o2;
    question.option3=o3;
    question.option4=o4;
    array.push(question);
}
function submit(){
    test.questionlist=array;
    var api = "http://localhost:8080/quiz_war/webapi/quiz/savetest";
    $.ajax
    ({
        type : "POST",
        url : api,
        data : test,
        async: false,
        cache: false,
        statusCode:
            {
                200:	function(response)
                {
                    location.href="http://localhost:8080/Student3_war/HTML/facultyHome.html";

                },
            }
    });
}