
<?php
    header("Access-Control-Allow-Origin:" *);
    $cn= new mysqli ("localhost", "root", "", "empresa");
    $rs= $cn->query("selec * from categorias");
    while($row = $rs-> fetch_assoc ()){
        $res [] = $row;
    }
    echo json_encode ($res,JSON_UNESCAPED_UNICODE);
    $cn->close();
?>