<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    //Extract Parameters:
    $usrEmail = "";
    $usrName = "";
    $usrCatagory = "";
    $usrQuery = "";
    $validationFial = array("Email" => "YES", "Name" => "YES", "Catagory" => "YES", "Query" => "YES");
    $validated = true;

    //Check if an email was provided:
    if(!isset($_POST['contactEmail1'])){
        $validated = false;
        $validationFial["Email"] = "NO";
    }else{

        //Validate the provided email:
        if(validateEmail($_POST['contactEmail1'])){
            $usrEmail = $_POST['contactEmail1'];
        }else{
            $validated = false;
            $validationFial["Email"] = "NO";
        }
            
        
    }

    //Check if a name was provided:
    if(!isset($_POST['contactName'])){
        $validated = false;
        $validationFial["Name"] = "NO";
    }else{

        //Validate the provided name:
        if(validateName($_POST['contactName'])){
            $usrName = $_POST['contactName'];
        }else{
            $validated = false;
            $validationFial["Name"] = "NO";
        }
    }

    //Check if a catagory was provided:
    if(!isset($_POST['contactCatagory'])){
        $validated = false;
        $validationFial["Catagory"] = "NO";
    }else{

        //Validate the provided catagory:
        if(validateCatagory($_POST['contactCatagory'])){
            $usrCatagory = $_POST['contactCatagory'];
        }else{
            $validated = false;
            $validationFial["Catagory"] = "NO";
        }
    }

    //Check if a query was provided:
    if(!isset($_POST['contactQuery'])){
        $validated = false;
        $validationFial["Query"] = "NO";
    }else{

        //Validate the provided query:
        if(validateQuery($_POST['contactQuery'])){
            $usrQuery = $_POST['contactQuery'];
        }else{
            $validated = false;
            $validationFial["Query"] = "NO";
        }
    }

    //Get the date:
    $DateTime = getDateTime();

    //echo $validationFial["Email"] . " : " . $validationFial["Name"] . " : " . $validationFial["Catagory"] . " : " . $validationFial["Query"] . "<br>";

    if($validated){

        //Send data to database:
        $response = sendRequest($usrName, $usrEmail, $usrCatagory, $usrQuery, $DateTime);
        $response = array_merge($response, $validationFial);
        echo json_encode($response);

    }else{

        //Send an error:
        $response = array('ADDED' => 'NO', 'STATUS' => 'VALIDATIONFAIL');
        $response = array_merge($response, $validationFial);
        echo json_encode($response);

    }

    //Validate the email:
    function validateEmail($Email){

        //$pattern = '/^(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){255,})(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){65,}@)(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22))(?:\\.(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\\]))$/iD';
        $pattern = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
        if(preg_match($pattern, $Email)) {
            return true;
        }
        return false;
    }

    //Validate the user's name:
    function validateName($Name){
        $pattern = '/^[A-Za-z ]+$/';
        if (preg_match($pattern, $Name)) {
            return true;
        }else{
            return false;
        }
    }

    //Validate the catagory:
    function validateCatagory($Catagory){
        if(strcmp($Catagory, '--Select Category--') == 0){
            return false;
        }else{
            return true;
        }
    }

    //Validate Query:
    function validateQuery($Query){
        $pattern = '/^[a-zA-Z0-9,.!?:() ]*$/';
        if (preg_match($pattern, $Query)) {
            return true;
        }else{
            return false;
        }
    }

    function getDateTime(){
        date_default_timezone_set('Australia/Brisbane');
        $date = date("Y-m-d");
        return $date;
    }

    function sendRequest($Name, $Email, $Catagory, $Query, $Date){

        include('config.php');
        $sql = 'INSERT INTO `contactRequests`(`contactName`, `contactEmail`, `contactCatagory`, `contactMessaage`, `contactDate`) 
                VALUES (?,?,?,?,?)';

        //Set up the PDO:
        $pdo = new PDO($connect_pdo, $User, $Password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        try {

            //Run the query:
            $sth = $pdo->prepare($sql);
            $array = array($Name, $Email, $Catagory, $Query, $Date);
            
            //If there is atleast one result:
            if ($sth->execute($array) === TRUE) {
                return array('ADDED' => 'YES', 'STATUS' => 'OK');
            }else{
                return array('ADDED' => 'NO', 'STATUS' => 'QUERYFAIL');
            }

        } catch (PDOException $e) {
            //Echo the error:
            echo $e->getMessage();
        }
    }

?>