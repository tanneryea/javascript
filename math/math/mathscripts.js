//Instantiates variables for global use to be modified later

var answer;
var questionBlock;
var first_answer;
var second_answer;
var third_answer;
var fourth_answer;
var fifth_answer;

//Single function that can check any question
function checkAnswer(questionNumber){

    //Gets element depending on arguments passed in initial call in HTMl
    questionBlock = document.getElementById(questionNumber)

    //Switch statement that alters correct div depending on argument
    switch(questionNumber){
        case "first":
            if (first_answer == (9+5)){        
                //Indicates answer is correct
                questionBlock.style.backgroundColor = "green";
                alert("Correct!");
            } else {
                //Indicates answer is incorrect
                questionBlock.style.backgroundColor = "red";
                alert("Incorrect!");
            }
            break;
        case "second":
            if (second_answer == (4*6)){ 
                //Indicates answer is correct       
                questionBlock.style.backgroundColor = "green";
                alert("Correct!");
            } else {
                //Indicates answer is incorrect
                questionBlock.style.backgroundColor = "red";
                alert("Incorrect!");
            }
            break;
        case "third":
            if (third_answer == (25-14)){    
                //Indicates answer is correct    
                questionBlock.style.backgroundColor = "green";
                alert("Correct!");
            } else {
                //Indicates answer is incorrect
                questionBlock.style.backgroundColor = "red";
                alert("Incorrect!");
            }
            break;
        case "fourth":
            if (fourth_answer == (48/3)){   
                //Indicates answer is correct     
                questionBlock.style.backgroundColor = "green";
                alert("Correct!");
            } else {
                //Indicates answer is incorrect
                questionBlock.style.backgroundColor = "red";
                alert("Incorrect!");
            }
            break;
        case "five":
            if (fifth_answer == (26%6)){    
                //Indicates answer is correct    
                questionBlock.style.backgroundColor = "green";
                alert("Correct!");
            } else {
                //Indicates answer is incorrect
                questionBlock.style.backgroundColor = "red";
                alert("Incorrect!");
            }
            break;
    }
}

//Single function that can accept answer to any quesiton

function input(questionNumber){
    //Accepts input through prompt, converts to answer
    answer = parseInt(prompt("Enter your answer", "??"));

    //If-else selector to put answer into appropriate variable. Could be done with a switch statement, but serves same function
    if (questionNumber == "first"){
        first_answer = answer;
    } else if (questionNumber == "second"){
        second_answer = answer;
    } else if (questionNumber == "third"){
        third_answer = answer;
    } else if (questionNumber == "fourth"){
        fourth_answer = answer;
    } else {
        fifth_answer = answer;
    }
}