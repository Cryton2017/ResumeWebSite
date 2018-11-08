<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    //Extract Parameters:
    $usrEmail = "";
    $usrName = "";
    $usrCatagory = "";
    $usrQuery = "";
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
        if(filter_var($Email, FILTER_VALIDATE_EMAIL)) {
            return true;
        }
        return false;
    }

    //Validate the user's name:
    function validateName($Name){
        $pattern = '/^[\p{L}\p{P}\p{Zs}]+$/';
        if (preg_match($pattern, $Name)) {
            return true;
        }else{
            return false;
        }
    }

    //Validate the catagory:
    function validateCatagory($Catagory){
        if($Catagory == "--Select Catagory--"){
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