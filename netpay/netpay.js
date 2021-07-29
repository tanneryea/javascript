//Declare all variables for global access
var stateTax = 0.03;
var fedTax;
var dependents;
var hourlyPay;
var hoursWorked;
var workedOvertime = false;
var overtimePay = 1.5;
var grossPay;
var finalTakeHome;

//Function prompts for data input to be used in other functions
function inputData(){
    
    //Parsing as float due to currency
    hourlyPay = parseFloat(prompt("Enter your hourly pay", "0.00"));
    hoursWorked = parseFloat(prompt("Enter the hours worked this week", "40"));
    dependents = parseFloat(prompt("Enter the amount of dependents you have", "0"));

    //Flag signals if employee qualifies for overtime if not
    if (hoursWorked > 40){
        workedOvertime = true;
    }

    //If overtime flag used, calculates gross pay with overtime. Otherwise, calculates pay based on hours worked
    if (workedOvertime){
        var overtimeHours = hoursWorked - 40;
        grossPay = (hourlyPay * 40) + (overtimeHours * hourlyPay * overtimePay);
    } else {
        grossPay = hoursWorked * hourlyPay;
    }

    //Calls functions to reduce input by employee and make calculations automatic
    taxCalculation();
    outputData();
}

//function calculates taxes and removes them from gross pay to get final take home pay
function taxCalculation(){
    //If-else statement to populate tax bracket depending on number of dependents and gross weekly pay
    if (dependents == 0 && grossPay > 1000.00){
        fedTax = 0.33;
    } else if (dependents == 0 && grossPay <= 1000.00){
        fedTax = 0.28;
    } else if (dependents <= 3 && grossPay > 1000.00){
        fedTax = 0.25;
    } else if (dependents <= 3 && grossPay <= 1000.00){
        fedTax = 0.22;
    } else if (dependents <= 6 && grossPay > 1000.00){
        fedTax = 0.22;
    } else if (dependents <= 6 && grossPay <= 1000.00){
        fedTax = 0.15;
    } else if (dependents > 6 && grossPay > 1000.00){
        fedTax = 0.15;
    } else if (dependents > 6 && grossPay <= 1000.00){
        fedTax = 0.10;
    }

    //Removes taxes from gross pay and applies result to final take home pay. Applies state tax if gross pay exceeds 1000.00, otherwise does not use it. 
    if (grossPay > 1000.00) {
        finalTakeHome = grossPay - (grossPay * fedTax);
        finalTakeHome -= finalTakeHome * stateTax;
    } else{
        finalTakeHome = grossPay - (grossPay * fedTax);
    }

}
    //Displays info in HTML. Formats monetary amounts to display correctly.
function outputData(){
    document.getElementById("hourly pay").innerHTML = "$" + hourlyPay.toFixed(2);
    document.getElementById("hours worked").innerHTML = hoursWorked;
    document.getElementById("gross pay").innerHTML = "$" + grossPay.toFixed(2);
    document.getElementById("dependents").innerHTML = dependents;
    document.getElementById("state tax").innerHTML = (stateTax*100).toFixed(0) + "%";
    //Indicates to employee if they are paying state tax or not
    if (grossPay < 1000.00) {
        document.getElementById("state tax").innerHTML += " (Not applicable at your gross pay level)";
    }
    document.getElementById("federal tax").innerHTML = (fedTax*100).toFixed(0) + "%";
    document.getElementById("final pay").innerHTML = "$" + finalTakeHome.toFixed(2);
}