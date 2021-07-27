

$("#menu-item-producto1").click(function(){
    fetch("componentes/producto1.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
           
            $("#main-content").html(data);
        })
        
})


$("#menu-item-producto2").click(function(){
    fetch("componentes/producto2.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
           
            $("#main-content").html(data);
        })
        
})


$("#menu-item-producto3").click(function(){
    fetch("componentes/producto3.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
           
            $("#main-content").html(data);
        })
        
})


$("#menu-item-producto4").click(function(){
    fetch("componentes/producto4.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
           
            $("#main-content").html(data);
        })
        
})


$("#menu-item-producto5").click(function(){
    fetch("componentes/producto5.html")
        .then(function(response){
            return response.text();
        })
        .then(function(data){
           
            $("#main-content").html(data);
        })
        
})


var ruta= "https://localhost/serviciocrud/categorias.php"

fetch(ruta)
.then(response => response.json()
.then(datos => {
    console.log(datos);
    llenarTabla(datos);
})

/*
function llenarTabla(datos){

}
*/

llenarTabla= (datos) => {
    $(datos).each((index,value) => {
        var fila = "<tr>"
        fila += "<td>" + value.idcategoria + "</td>";
        fila += "<td>" + value.nombre + "</td>";
        fila += "<td>" + value.descripcion + "</td>";
        fila += "<tr>";
        $("#tbody-categorias").append(fila);
    })
}