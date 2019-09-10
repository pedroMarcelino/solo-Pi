<?php 
    $nome = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    include('../../asset/includes/conection.php');

    $sql = $conn->prepare("INSERT INTO user(cd_user, nm_user, email, pass) VALUES (null, '$nome', '$email', '$password')");
    $return = $sql->execute();

    if($return == TRUE){
        $array = array (
            "return" => TRUE,
        );  

        echo json_encode($array);
    }else{
        
        $array = array (
            "return" => FALSE,
        );  

        echo json_encode($array);
    }