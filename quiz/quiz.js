var timer;
var sec = 60;
var answers = [];
var correct_answer = [2, 1, 1, 2, 4, 1, 1, 3, 2, 2]; //update the index of correct; answer starts from 1

function enterAnswer(num, ans) {
    answers[num] = ans
}

function checkComplete() {
    for (var i = 0; i < 10; i++) {
        if (answers[i] === undefined) {
            alert("You missed question number " + (i + 1) + " !");
            return;
        }
    }
    validate()
}

function validate() {
    let score = 0;
    for (var i = 0; i < 10; i++) {
        console.log(answers[i], correct_answer[i])
        if (answers[i] == correct_answer[i]) {
            score += 2;
        } else {
            score == 0 ;
        }
    }
    var results = document.getElementById('results');
    document.getElementById("body").style.back = 'none';

    //display the background colour according to marks
    if (score >= 10){
    document.getElementById("body").style.backgroundColor = 'green';
    }
    else{
    document.getElementById("body").style.backgroundColor = 'red';
    }
    results.innerHTML = "You Scored " + score 

    colorexplain.innerHTML = "Above 10 --> green background ||  Below 10 --> red background  "

    
}

window.onload = function timecount() {
    timer = setInterval(function () {
        sec--;
        if (sec == 0) {
            clearTimeout(timer);
            document.getElementById("timer").innerHTML = "Your session finished"
            validate()
        }
        else {
            document.getElementById("timer").innerHTML = "COUNTDOWN 0" + " : " + sec;
        }
    }, 1000);
}


