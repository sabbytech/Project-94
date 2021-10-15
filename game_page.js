var player_name1 = localStorage.getItem("player1_name");

var player_name2 = localStorage.getItem("player2_name");

var player_score1 = 0;

var player_score2 = 0;

document.getElementById("player1_name").innerHTML = player_name1;

document.getElementById("player2_name").innerHTML = player_name2;

document.getElementById("player1_score").innerHTML = player_score1;

document.getElementById("player2_score").innerHTML = player_score2;

document.getElementById("player_question").innerHTML = "Player Who Asks - " + player_name1;

document.getElementById("player_answer").innerHTML = "Player Who Answers - " + player_name2;

function send () {

    number1 = document.getElementById("number1").value;

    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    //YEAH!//

    var question_number = '<h4 id="display_number">' + number1 + "X" + number2 + '</h4>';

    var input_box = '<br> Answer : <input type="text" id="input_box" placeholder="Enter Your Answer" style="width:40%;">';

    var check_button = '<br><br> <button type="button" id="check_button" onclick="check();" class="btn btn-info">Check</button>';

    var row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";

    document.getElementById("number2").value = "";

}


 question_turn = "player1";

 answer_turn = "player2";


function check () {
    get_answer = document.getElementById("input_box").value;
    if(get_answer == actual_answer){

        if(answer_turn == "player1"){
            player_score1 = player_score1 +1;
            document.getElementById("player1_score").innerHTML =player_score1;
        }
        else {
            player_score2 = player_score2 +1;
            document.getElementById("player2_score").innerHTML =player_score2;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        answer_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question turn -" + player_name2;
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player_name1;
    }  else {
        question_turn = "player1";
        answer_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question turn -" + player_name1; 
        document.getElementById("player_answer").innerHTML = "Answer turn -" + player_name2;   
    }
    document.getElementById("output").innerHTML = "";
}