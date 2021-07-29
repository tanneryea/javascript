<?php
if(isset($_GET["VERB"])){

  $verb = $_GET["VERB"];
  switch($verb){
    case "CREATE":
      if((isset($_GET["username"])) && (isset($_GET["password"]))) {
        CreateUser($_GET["username"], $_GET["password"]);
      } 
      else {
        RequestFail();
      }
    break;
    case "READ":
      if(isset($_GET["username"])){
        RetrieveBlog($_GET["username"]);
      } 
      else if(isset($_GET["self"])){
        //If READ comes from Edit Blog button, passes cookie instead of chosen username
        RetrieveBlog($_COOKIE["username"]);
      }
      else {
        RequestFail();
      }
    break;
    case "USERS":
      GetUsers();
    break;
    case "FOLLOWS":
      GetFollowers();  
    break;
    case "LOGIN":
      if((isset($_GET["username"])) && (isset($_GET["password"]))){
        Login($_GET["username"], $_GET["password"]);
      } 
      else {
        RequestFail();
      }
    break;
    default:
      RequestFail();
  }
 
} 
else if ($_SERVER["REQUEST_METHOD"] == "POST"){
  $data = json_decode(file_get_contents('php://input'), true);
  if (!empty($data)){  
    UpdateBlog($data["blog"]);
  }
  else {
    RequestFail();
  }
}
else{
  RequestFail();
}


/* END REGULAR CODE */

/* FUNCTIONS START HERE */

function RequestFail(){
  http_response_code(404);
  header('Content-Type: application/json');
  echo json_encode(false);
}

//Working. CREATE call
function CreateUser($username, $password) {
    try {
        $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
        // set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $query = $conn->prepare("SELECT username FROM users WHERE username=:username");
        $query->execute(['username' => $username]);
        //If user exists, returns false
        if ($query->rowCount() > 0){
          echo json_encode(false);
        } 
        //Else creates user
        else {
          $query = $conn->prepare("INSERT into users (username, password) VALUES (:username, :password)");
          $queryArray = array('username'=>$username, "password"=>$password);
          $query->execute($queryArray);
          http_response_code(200);
          header('Content-Type: application/json');
          echo json_encode(true);
        }        
      } 
      catch(PDOException $e) {
        http_response_code(200);
        header('Content-Type: application/json');
        echo json_encode(false);
      }
    
}

//Working. LOGIN call
function Login($username, $password){
  try {
    $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("SELECT password FROM users WHERE username=:username");
    $query->execute(['username' => $username]);
    $user = $query->fetch();
    //If user doesn't exist, returns false
    if ($query->rowCount() == 0){
      http_response_code(200);
      header('Content-Type: application/json');
      echo json_encode(false);
    } 
    //If user exists, checks to see if password matches
    else if ($user['password'] == $password){        
      setcookie("username", $username);
      http_response_code(200);
      header('Content-Type: application/json');
      echo json_encode(true);
    } 
    //Returns false if password does not match
    else {
      http_response_code(200);
      header('Content-Type: application/json');
      echo json_encode(false);
    }
  } 

  catch(PDOException $e) {
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode(false);
  }
}


//Working. USERS call
function GetUsers(){
  $arrayReturn = array();
  try {
    $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("SELECT username FROM users");
    $query->execute();
    while ($row = $query->fetch()){
      $username = $row['username'];
      $arrayReturn[] = $username;
    }
  } 
  catch(PDOException $e) {
    //echo "Error: " . $e->getMessage();
  }
  //Returns blank array even if no users exist
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode($arrayReturn);
}

//Working. READ call
function RetrieveBlog($username){
  $blogEntry = "";
  try {
    $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("SELECT blog FROM blog WHERE username=:username");
    $query->execute(['username' => $username]);
    $row = $query->fetch();
    $blogEntry = $row['blog'];
    //If username is not the cookie, logs blog as read. Prevents your own "reads" from being logged  
    if ($username != $_COOKIE["username"]){
      UpdateBlogReaders($username);
    }

  }
  catch(PDOException $e) {
    //echo "Error: " . $e->getMessage();
  }
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode($blogEntry);
}

//Working. Part of READ call
function UpdateBlogReaders($blogger){
  $reader = $_COOKIE['username'];
  $time = time(); //Unix timestamp
  try{
    $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("INSERT INTO tracker (reader, blogger, lastread) VALUES (:reader, :blogger, :lastread)");
    $queryArray = array('reader'=>$reader, 'blogger'=>$blogger, 'lastread' => $time);
    $query->execute($queryArray);
  }

  catch(PDOException $e) {
    //echo "Error: " . $e->getMessage();
  }
}

//Working. FOLLOWS call
function GetFollowers(){
  $arrayReturn = array();
  $blogger = $_COOKIE['username'];
  try {
    $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("SELECT reader, lastread FROM tracker WHERE blogger=:blogger");
    $query->execute(['blogger' => $blogger]);
    while ($row = $query->fetch()){
      $tempRow = array('reader' => $row['reader'], 'lastread'=> $row['lastread']);
      $arrayReturn[] = $tempRow;
    }    
  } 
  catch(PDOException $e) {
    //echo "Error: " . $e->getMessage();
  }
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode($arrayReturn);
}

//Working. UPDATE call
function UpdateBlog($blog){ 
  $username = $_COOKIE['username'];
  $time = time(); //Unix timestamp
  try {
    $conn = new PDO("mysql:host=un9thave.com;dbname=cgs2822project2", "cop2360", "cop2360");
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query = $conn->prepare("UPDATE blog SET updatedate=:currentdatetime, blog=:blog WHERE username=:username");
    $queryArray = array('currentdatetime'=>$time, 'blog'=>$blog, 'username'=>$username);
    $query->execute($queryArray);
    //If there is no blog for the users, creates a blog
    if ($query->rowCount() == 0){
      $query = $conn->prepare("INSERT INTO blog (username, blog, updatedate) VALUES (:username, :blog, :currentdatetime)");
      $queryArray = array('username'=>$username, "blog"=>$blog, 'currentdatetime'=>$time);
      $query->execute($queryArray);
    }


    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode(true);
  } 
  
  catch(PDOException $e) {
    //echo "Error: " . $e->getMessage();
    http_response_code(200);
    header('Content-Type: application/json');
    echo json_encode(false);
  }
}

?>