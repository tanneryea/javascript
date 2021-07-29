var rowNum = 1;


function getRandom20()
{
    var RandomNum = Math.floor(Math.random() * 20) + 1;
    return RandomNum;
}

function getOperator() {
    var max = 5;
    var min = 1;
    var operator = "";
    var RandomNum = Math.floor(Math.random() * 5) + 1;
    switch (RandomNum){
        case 1:
            operator = " + ";
            break;
        case 2:
            operator = " - ";
            break;
        case 3:
            operator = " * ";
            break;
        case 4:
            operator = " / ";
            break;
        case 5:
            operator = " power of ";
            break;
    }
    return operator;
}


function generateCellContents(){
    var firstNumber = getRandom20();
    var secondNumber = getRandom20();
    var operator = getOperator();
    
    var cellContents = firstNumber + operator + secondNumber;
    return cellContents;
}

function addCell(tr){
    var td = document.createElement('td');
    td.innerHTML = generateCellContents();
    tr.appendChild(td);
}

function addRow(tbl){
    var tr = document.createElement('tr');

    addCell(tr);
    addCell(tr);
    addCell(tr);
    addCell(tr);

    if (rowNum % 2 == 0) {
        tr.style.backgroundColor = "aqua";
    }

    tbl.appendChild(tr);
}

function main(){
    tbl = document.getElementById('tbl');

    addRow(tbl);
    rowNum++;
    addRow(tbl);
    rowNum++;
    addRow(tbl);
}








