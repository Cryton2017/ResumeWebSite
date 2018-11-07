<?php
    // ini_set('display_errors', 1);
    // ini_set('display_startup_errors', 1);
    // error_reporting(E_ALL);

    //Extract Parameters:
    $rawEmail = $_POST['contactEmail1'];
    $rawName = $_POST['contactName'];
    $rawCatagory = $_POST['contactCatagory'];
    $rawQuery = $_POST['contactQuery'];

    //Validate parameters:
    $validEmail = validateEmail($rawEmail);
    $validName = validateName($rawName);
    $validCatagory = validateCatagory($rawCatagory);
    $validQuery = validateQuery($rawQuery);
    $DateTime = getDateTime();

    //Send data to database:
    $response = sendRequest($validName, $validEmail, $validCatagory, $validQuery, $DateTime);
    echo json_encode($response);

    //Validate the email:
    function validateEmail($Email){
        if(filter_var($Email, FILTER_VALIDATE_EMAIL)) {
            return $Email;
        }
        return false;
    }

    //Validate the user's name:
    function validateName($Name){
        $pattern = '/^[\p{L}\p{P}\p{Zs}]+$/';
        if (preg_match($pattern, $Name)) {
            return $Name;
        }else{
            return false;
        }
    }

    //Validate the catagory:
    function validateCatagory($Catagory){
        if($Catagory == "--Select Catagory--"){
            return false;
        }else{
            return $Catagory;
        }
    }

    //Validate Query:
    function validateQuery($Query){
        $pattern = '/^[a-zA-Z0-9,.!?:() ]*$/';
        if (preg_match($pattern, $Query)) {
            return $Query;
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
        //$pdo = new PDO('mysql:host=10.0.0.131;dbname=resumeSite', 'admin', 'SIQ6UHEHy');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        try {

            //Run the query:
            $sth = $pdo->prepare($sql);
            $array = array($Name, $Email, $Catagory, $Query, $Date);
            
            //If there is atleast one result:
            if ($sth->execute($array) === TRUE) {
                return array('ADDED' => 'YES');
            }else{
                return array('ADDED' => 'NO');
            }

        } catch (PDOException $e) {
            //Echo the error:
            echo $e->getMessage();
        }
    }

?>