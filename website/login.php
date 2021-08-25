<?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    //Extract Parameters:
    $usrEmail = "";
    $usrPassword = "";
    $validationFial = array("Email" => "YES", "Password" => "YES");
    $validated = true;

    //Check if an email was provided:
    if(!isset($_GET['usrEmail'])){
        $validated = false;
        $validationFial["Email"] = "NO";
    }else{

        //Validate the provided email:
        if(validateEmail($_GET['usrEmail'])){
            $usrEmail = $_GET['usrEmail'];
        }else{
            $validated = false;
            $validationFial["Email"] = "NO";
        }
            
        
    }

    //Check if a password was provided:
    if(!isset($_GET['usrPassword'])){
        $validated = false;
        $validationFial["Password"] = "NO";
    }else{

        //Validate the provided password:
        if(validatePassword($_GET['usrPassword'])){
            $usrPassword = $_GET['usrPassword'];
        }else{
            $validated = false;
            $validationFial["Password"] = "NO";
        }
    }

    //Get the date:
    //$DateTime = getDateTime();

    //echo $validated . " : " . $usrEmail . " : " . $usrPassword;

    if($validated){

        //Send data to database:
        $response = login($usrEmail, $usrPassword);
        echo json_encode($response);

    }else{

        //Send an error:
        $response = array('ADDED' => 'NO', 'STATUS' => 'VALIDATIONFAIL');
        $response = array_merge($response, $validationFial);
        echo json_encode($response);

    }

    //Validate the email:
    function validateEmail($Email){

        $pattern = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
        if(preg_match($pattern, $Email)) {
            return true;
        }
        return false;
    }

    //Validate the user's name:
    function validatePassword($Password){
        $pattern = '/^\S*(?=\S{8,})(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[\d])(?=\S*[\W])\S*$/';
        if (preg_match($pattern, $Password)) {
            return true;
        }else{
            return false;
        }
    }

    // function getDateTime(){
    //     date_default_timezone_set('Australia/Brisbane');
    //     $date = date("Y-m-d");
    //     return $date;
    // }

    function login($Email, $Password){

        include('config.php');
        $sql = 'SELECT ID, username, firstname, lastname, lastActive, active 
                FROM users
                WHERE email=? AND password=?';

        //Set up the PDO:
        $pdo = new PDO($connect_pdo, $User, $Password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        try {

            //Run the query:
            $sth = $pdo->prepare($sql);
            $array = array($Email, $Password);

            // $sth->execute($array);

            // $result = $sth->fetchAll();
            // $numrows = $sth->rowCount();
            
            //If there is atleast one result:
            if ($sth->execute($array) === TRUE) {
                $numrows = $sth->rowCount();
                echo "NUMROWS: " . $numrows . "<br>";
                return array('ADDED' => 'YES', 'STATUS' => 'OK');
            }else{
                return array('ADDED' => 'NO', 'STATUS' => 'QUERYFAIL');
            }


            // echo $numrows;
            // //If there is atleast one result:
            // if ($numrows > 0) {
            //     $status = 'OK';
            //     for ($ri = 0; $ri < $numrows; $ri++) {
            //         $row = $result[$ri];

            //         if($row['active'] == 1){
            //             $active = 'YES';
            //             return array('STATUS' => $status, 'ACTIVE' => $active);
            //         }else{
            //             $active = 'NO';
            //             return array('STATUS' => $status, 'ACTIVE' => $active);
            //         }

            //         //$borid = $row['borid'];
            //      }


            //     //return array('ADDED' => 'YES', 'STATUS' => 'OK');
            // }else{
            //     return array('STATUS' => 'NO');
            // }

        } catch (PDOException $e) {
            //Echo the error:
            echo $e->getMessage();
        }
    }

?>