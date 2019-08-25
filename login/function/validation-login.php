<?php
    include('../../asset/includes/conection.php');

    $email = $_POST['email'];
    $password = $_POST['password'];

    if($email == "" || $password == ""){
         $array = array(
            "return" => "502" ,
        );
        echo json_encode($array);
    }else{
        $sql = $conn->prepare("SELECT * FROM user WHERE email = '$email'");
        $sql->execute();
        $count =  $sql->rowCount();

        $ret = $sql->fetch(PDO::FETCH_OBJ);

        if($count > 0) {
            if($email == $ret->email && $password == $ret->password){
                session_start();
                $_SESSION['cod'] = $ret->cd_user;

                $array = array(
                    "return" => TRUE,
                );
                echo json_encode($array);
            }else{
                $array = array(
                    "return" => FALSE,
                );
                echo json_encode($array);
            }
        }else{
            $array = array(
                "return" => "user_not_found",
            );
            echo json_encode($array);
        }
    }