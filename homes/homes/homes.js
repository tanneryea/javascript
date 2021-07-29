function findMedian(values){
    const sorted = values.slice().sort((a,b) => a-b); //Sorts values by ignoring their ASCII values
    const middle = Math.floor(sorted.length / 2); //Finds middle index of array

    if (sorted.length % 2 === 0){ //Calculates median if array length is even
        return (sorted[middle - 1] + sorted[middle])/2;
    }

    return sorted[middle]; //Returns median if array lengh is odd

}

function enterValues(){
    var homes = [];

    do {

        var value = prompt("Enter the value of the home or enter 0 to calculate median");
        if (value < 0){
            value = prompt("Enter a non-negative value or 0 to calculate median"); //Certifies that amounts entered are positive
        }
        if (value == 0){ //Sentinel to end calculation without pushing 0 into array
            break;
        }

        value = parseInt(value); //Converts prompted values into integers

        homes.push(value); //Adds to array

    } while (value != 0);

    var median = findMedian(homes); //Finds median
    document.write("The median house price is: $" + median); //Output
}