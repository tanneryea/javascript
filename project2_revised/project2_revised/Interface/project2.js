var baseurl = "https://un9thave.com/~student07/project2.php";

//Does CREATE call
async function FormCreate() { 
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var thisurl = baseurl + "?VERB=CREATE&username=" + username + "&password=" + password;
    const response = await fetch(thisurl);
    const successful = await response.json();
    if (successful == true){
        alert("Account successfully created! Please log in.");
    } else {
        alert("Username already exists! Please try another.");
    }
}


//Does LOGIN call
async function Login(){ 
    var username = document.getElementById("login_username").value;
    var password = document.getElementById("login_password").value;
    var thisurl = baseurl + "?VERB=LOGIN&username=" + username + "&password=" + password;
    const response = await fetch(thisurl);
    const successful = await response.json();
    if (successful == true){
        //Alerts log in was successful and reveals the main blogging interface
        alert("Log in successful!");
        makeVisible();
    } else {
        alert("Something went wrong! Re-enter your username and password or register a new user.");
    }
}

//Does USERS call. Toggles on and off
async function GetUsers() { 
    var display = document.getElementById("user_display");
    //If display has HTML, toggles it to be empty
    if (display.innerHTML){
        display.innerHTML = "";
    } 
    //Else populates div with HTML
    else {
        var thisurl = baseurl + "?VERB=USERS";
        const response = await fetch(thisurl);
        const data = await response.json();
        data.forEach(userList); //foreach loop that dynamically creates the blog list
    }
}

//Does FOLLOWS call. Toggles on and off
async function GetFollowers(){
    var display = document.getElementById("reader_display");
    //If display has HTML, toggles it to be empty
    if (display.innerHTML){
        display.innerHTML = "";
    } 
    //Else populates div with HTML
    else {
        var thisurl = baseurl + "?VERB=FOLLOWS";
        const response = await fetch(thisurl);
        const data = await response.json();
        data.forEach(displayFollowers);
    }
}

//Does UPDATE call
async function UpdateBlog() {
    var blogEntry = document.getElementById("blog").value;    
    const settings = {
        method: 'POST', 
        body: JSON.stringify({
            blog: blogEntry
        }),
        headers: {
            'Content-Type': 'application/json',
        }        
    };
    var thisurl = baseurl;
    const response = await fetch(thisurl, settings);
    const successful = await response.json();
    if (successful == true) {
        alert("Your blog was succesfully updated!");
        document.getElementById("blog").value = ""; //Resets blog entry to blank
    } else {
        alert("Something went wrong! Try again.");
    }
}

//Does READ call
async function RetrieveBlog(username) {
    var thisurl = baseurl + "?VERB=READ&username=" + username;
    const response = await fetch(thisurl);
    document.getElementById("blog_display").innerHTML = await response.json();
}

//Does READ call, but directs to edit box
async function EditBlog() {
    var thisurl = baseurl + "?VERB=READ&self=True";
    const response = await fetch(thisurl);
    document.getElementById("blog").value = await response.json();
}

//Internal functions

//Hides and reveals tags when logged in
function makeVisible(){
    var x = document.getElementsByClassName("hidden");
    for (var i = 0; i <x.length; i++){
        x[i].style.visibility = "visible";
    }

    var y = document.getElementsByClassName("hideable");
    for (var i = 0; i <y.length; i++){
        y[i].style.display = "none";
    }
}

//Looping function that populates the reader display with people who have read the user's blog
function displayFollowers(follower){
    var reader = follower["reader"];
    var lastread = follower["lastread"];
    //Converts UNIX time stamp to ISO8601
    var newdate = new Date(lastread*1000);
    newdate = newdate.toLocaleDateString("en-US");

    var div = document.createElement("DIV");
    div.innerHTML = `<strong>Reader: </strong>${reader} <br> <strong>Last Read: </strong>${newdate} </br></br>`;
    document.getElementById("reader_display").appendChild(div);
}

//Creates the list of blogs
function userList(username){
    var div = document.createElement("DIV");
    var breaks = document.createElement("P");
    div.innerHTML = "<strong>" + username  + "</strong> ";
    var btn = document.createElement("BUTTON"); //Creates a button that will invoke blog retrieval if clicked
    btn.innerHTML = "Show Blog";
    btn.addEventListener("click", function(){
        RetrieveBlog(username);
    }) 
    div.appendChild(btn); 
    div.appendChild(breaks);
    document.getElementById("user_display").appendChild(div);
}