var studentNum;
var studentName;
var studentAttendance;
var studentHomework;
var studentMidterm;
var studentFinal;
var studentCourseGrade;

function inputData(){

    studentNum = parseInt(prompt("How many students are you entering grades for?"));

    //Input validation for number of students
    while (studentNum <= 0){
        studentNum = parseInt(prompt("Can not have less than 1 student. Please enter a new number."));
    }

    //For loop that iterates through number of students
    for (i = 1; i <= studentNum; i++){
        studentName = prompt("Enter student " + i + "'s name.");
        studentAttendance = parseInt(prompt("Enter student " + i + "'s attendance grade."));
        studentHomework = parseInt(prompt("Enter student " + i + "'s homework grade."));
        studentMidterm = parseInt(prompt("Enter student " + i + "'s midterm grade."));
        studentFinal = parseInt(prompt("Enter student " + i + "'s final grade."));

        studentCourseGrade = (studentMidterm*0.3)+(studentFinal*0.4)+(studentHomework*0.2)+(studentAttendance*0.1);

        //Creates a row
        var row = document.createElement("tr");

        //Changes the row's style for every other student
        if (i % 2 == 0){
            row.style.backgroundColor = "aqua";
            row.style.color = "black";
        }

        //Adds data to row
        row.innerHTML = "<td>" + studentName + "</td><td>" + studentAttendance + "</td><td>" + studentHomework + "</td><td>" + studentMidterm + "</td><td>" + studentFinal + "</td><td>" + studentCourseGrade + "</td>";

        //Appends row with data to table
        document.getElementById("table").appendChild(row);

    }
}