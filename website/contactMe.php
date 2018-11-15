<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    //Extract Parameters:
    $usrEmail = "";
    $usrName = "";
    $usrCatagory = "";
    $usrQuery = "";
    $validationFial = array();
    $validated = true;

    //Check if an email was provided:
    if(!isset($_POST['contactEmail1'])){
        $validated = false;
    }else{

        //Validate the provided email:
        if(validateEmail($_POST['contactEmail1'])){
            $usrEmail = $_POST['contactEmail1'];
        }else{
            $validated = false;
        }
            
        
    }

    //Check if a name was provided:
    if(!isset($_POST['contactName'])){
        $validated = false;
    }else{

        //Validate the provided name:
        if(validateName($_POST['contactName'])){
            $usrName = $_POST['contactName'];
        }else{
            $validated = false;
        }
    }

    //Check if a catagory was provided:
    if(!isset($_POST['contactCatagory'])){
        $validated = false;
    }else{

        //Validate the provided catagory:
        if(validateCatagory($_POST['contactCatagory'])){
            $usrCatagory = $_POST['contactCatagory'];
        }else{
            $validated = false;
        }
    }

    //Check if a query was provided:
    if(!isset($_POST['contactQuery'])){
        $validated = false;
    }else{

        //Validate the provided query:
        if(validateQuery($_POST['contactQuery'])){
            $usrQuery = $_POST['contactQuery'];
        }else{
            $validated = false;
        }
    }

    //Get the date:
    $DateTime = getDateTime();

    if($validated){

        //Send data to database:
        $response = sendRequest($usrName, $usrEmail, $usrCatagory, $usrQuery, $DateTime);
        echo json_encode($response);

    }else{

        //Send an error:
        echo json_encode(array('ADDED' => 'NO', 'STATUS' => 'VALIDATIONFAIL'));

    }

    //Validate the email:
    function validateEmail($Email){

        $pattern = '/^(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){255,})(?!(?:(?:\\x22?\\x5C[\\x00-\\x7E]\\x22?)|(?:\\x22?[^\\x5C\\x22]\\x22?)){65,}@)(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22))(?:\\.(?:(?:[\\x21\\x23-\\x27\\x2A\\x2B\\x2D\\x2F-\\x39\\x3D\\x3F\\x5E-\\x7E]+)|(?:\\x22(?:[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x21\\x23-\\x5B\\x5D-\\x7F]|(?:\\x5C[\\x00-\\x7F]))*\\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-+[a-z0-9]+)*\\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-+[a-z0-9]+)*)|(?:\\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\\]))$/iD';
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
        // Change the line below to your timezone!
        date_default_timezone_set('Australia/Brisbane');
        $date = date('m/d/Y h:i:s a', time());
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