var attributes = new Array("Name", "Nickname", "Email", "Favorite Movie", "Favorite Book", "Favorite Music", "Paragraph", "Image", "Page Background", "Text Color", 16)

function populateAttributes(){
    //Reads elements from form into array
    var userInput = document.getElementById("myForm");
    var i;
    for (i = 0; i < userInput.length; i++){
        attributes[i] = userInput.elements[i].value;
    }
    changePage(); //Runs changepage function
    return false; //Returns false to keep results on HTML page
}

function changePage(){
    //Modifies the customized area div with user-entered information
    document.getElementById("nameOutput").innerHTML = attributes[0];
    document.getElementById("nicknameOutput").innerHTML = attributes[1];
    document.getElementById("emailOutput").innerHTML = attributes[2];
    document.getElementById("movieOutput").innerHTML = attributes[3];
    document.getElementById("bookOutput").innerHTML = attributes[4];
    document.getElementById("musicOutput").innerHTML = attributes[5];
    document.getElementById("aboutOutput").innerHTML = attributes[6];
    document.getElementById("avatarOutput").src = attributes[7];
    document.getElementById("avatarOutput").style = "width:100px;height:100px;";
    document.getElementById("customized_area").style.backgroundColor = attributes[8];
    document.getElementById("customized_area").style.color = attributes[9];
    document.getElementById("customized_area").style.fontSize = attributes[10] + "px";
}