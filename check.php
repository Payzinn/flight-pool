<?php
$login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
$name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
$last = filter_var(trim($_POST['last']), FILTER_SANITIZE_STRING);
$doc = filter_var(trim($_POST['doc']), FILTER_SANITIZE_STRING);
$phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_STRING);
$pass = filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING);

if(mb_strlen($login)<4 || mb_strlen($login)>25) {
    echo "Недопустимая длина логина";
    exit();
} 

else if(mb_strlen($name)<3 || mb_strlen($name)>20) {
    echo "Недопустимая длина имени(от 3 до 20 символов)";
    exit();
}

else if(mb_strlen($last)<3 || mb_strlen($last)>20) {
    echo "Недопустимая длина фамилии(от 3 до 20 символов)";
    exit();
}


if(mb_strlen($doc)<6 || mb_strlen($doc)>6) {
    echo "Недопустимая длина номера документа (6 символов)";
    exit();
}

if(mb_strlen($pass)<6 || mb_strlen($pass)>32) {
    echo "Недопустимая длина пароля (от 6 до 32 символов)";
    exit();
}

if(mb_strlen($phone)<11 || mb_strlen($phone)>11) {
    echo "Недопустимая длина номера телефона (11 символов)";
    exit();
}



$mysql = new mysqli("127.0.0.1:8889","root","root","register");
$mysql->query ("INSERT INTO `users` (`login`, `name`, `last`, `doc`, `phone`, `pass`) 
VALUES ('$login', '$name', '$last', '$doc', '$phone', '$pass')");
if (!$mysql) {
 die("Connection failed: " . mysqli_connect_error());}
 echo "Connected successfully";
$mysql->close();

 ?>