
<?php
    header("Access-Control-Allow-Origin:" *);
    $cn= new mysqli ("localhost", "root", "", "examenfinal");
    $idestudiante = $_POST ["idestudiante"];
    $nombres = $_POST ["nombres"];
    $apellidopaterno = $_POST ["apellidopaterno"];
    $edad = $_POST ["edad"];
    $ciudad = $_POST ["ciudad"];


    $rs= $cn->query("INSERT INTO tabla (idestudiante,nombres,apellidopaterno,edad,ciudad) values('$idestudiante','$apellidopaterno','$edad','$ciudad')");
    echo insert $cn-> insert_id;
    $cn->close();
?>