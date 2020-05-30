function func() 
{
    var studentid = JSON.parse(sessionStorage.getItem("id"));
    var testid = JSON.parse(sessionStorage.getItem("testid"));
    var api = "http://localhost:8080/quiz_war/webapi/quiz/questionlist";
    var text =  {"studentid":studentid,"testid":testid};
    $.ajax
    ({
        type : "POST",
        url : api,
        data : text,
        async: false,
        cache: false,
        statusCode:
        {
            200:    function(response)
            {
                sessionStorage.setItem("trial1",response[0][0]);
                for (var i = 0; i < response.length; i++) 
                {
                    var question="";
                    var qno = i+1;
                    question += "<p>Q "+qno+". "+response[i][0]+"</p>";
                    question += "<p>("+response[i][7]+" Marks)</p>";
                    if (response[i][1] == 'true') 
                    {
                        question += "<label><input type='radio' id='"+i+"' value='1'>"+response[i][2]+"</label><br>";
                        question += "<label><input type='radio' id='"+i+"' value='2'>"+response[i][3]+"</label><br>"
                        question += "<label><input type='radio' id='"+i+"' value='3'>"+response[i][4]+"</label><br>"
                        question += "<label><input type='radio' id='"+i+"' value='4'>"+response[i][5]+"</label><br>"
                    }
                    else
                    {
                        question += "<label><textarea id='"+i+"' rows='1' cols='25'></textarea></label><br>";
                    } 
                    document.getElementById("questions").innerHTML += question;                       
                }
            }
        }
    });


// var response = [
//     ["The tree sends downroots from its branches to the soil is know as:",
//     "true",
//     "Oak",
//     "Pine",
//     "Banyan",
//     "Palm"],
//     ["Electric bulb filament is made of",
//     "false",
//     "Copper",
//     "Aluminum",
//     "lead",
//     "Tungsten"],
//     ["Non Metal that remains liquid at room temprature is",
//     "true",
//     "Phophorous",
//     "Bromine",
//     "Clorine",
//     "Helium"],
//     ["Which of the following is used in Pencils ?",
//     "true",
//     "Graphite", 
//     "Silicon",
//     "Charcoal", 
//     "Phosphorous"]
//     ]; 

//     for (var i = 0; i < response.length; i++) 
//     {
//         var question="";
//         var qno = i+1;
//         question += "<p>Q "+qno+". "+response[i][0]+"</p>";
//         if (response[i][1] == 'true') 
//         {
//             question += "<label><input type='radio' id='"+i+"' value='1'>"+response[i][2]+"</label><br>";
//             question += "<label><input type='radio' id='"+i+"' value='2'>"+response[i][3]+"</label><br>"
//             question += "<label><input type='radio' id='"+i+"' value='3'>"+response[i][4]+"</label><br>"
//             question += "<label><input type='radio' id='"+i+"' value='4'>"+response[i][5]+"</label><br>"
//         }
//         else
//         {
//             question += "<label><textarea id='"+i+"' rows='1' cols='25'></textarea></label><br>";
//         } 
//         document.getElementById("questions").innerHTML += question;                       
//     }

}

function answersList() 
{
    var answers = [];
    var ele = document.getElementsByTagName('input'); 
    var text = document.getElementsByTagName('textarea');
      
    for(i = 0; i < ele.length; i++) 
    {      
        if(ele[i].type="radio") 
        { 
          
            if(ele[i].checked)
            {
                // answers[ele[i].id] = ele[i].value;
                var qno = parseInt(ele[i].id) + 1;
                answers.push(qno+":"+ele[i].value);
                
            }   
        } 
    }

    for (var i = 0; i < text.length; i++) 
    {
        var qno = parseInt(text[i].id) + 1;
        answers.push(qno+":"+text[i].value);
    }
    var test=new Object();
    test.answerlist = answers;
    test.testid = JSON.parse(sessionStorage.getItem("testid"));
    test.studentid = JSON.parse(sessionStorage.getItem("id"));
    sessionStorage.setItem("answerlist",JSON.stringify(test));
    var api = "http://localhost:8080/quiz_war/webapi/quiz/saveanswer";

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
                200:    function(response)
                {
                    alert(response);
                    location.href="http://localhost:8080/quiz_war/HTML/studentHome.html";
                }
            }
    });
}