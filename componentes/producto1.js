
console.log("producto1");

const producto1 = [


        {id: 1,empresa: "Backus",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Lima",producto:"images/producto.jpg" },
    
        {id: 2,empresa: "Graña Montero",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Puno",producto:"images/producto.jpg" },
    
        {id: 3,empresa: "Alicorp",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Ica",producto:"images/producto.jpg" },
    
        {id: 4,empresa: "Marriot",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Tacna",producto:"images/producto.jpg" },
    
        {id: 5,empresa: "Sheraton",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Iquitos",producto:"images/producto.jpg" },
    
        {id: 6,nempresa: "BBVA",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Huancayo",producto:"images/producto.jpg" },
    
        {id: 7,empresa: "Ferreyros",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Huaraz",
        producto:"images/producto.jpg" },
    
        {id: 8,empresa: "Scotiabank",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Cajamarca",producto:"images/producto.jpg" },
    
        {id: 9,empresa: "BCP",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Trujillo",producto:"images/producto.jpg" },

        {id: 10,empresa: "Real Plaza",direccion:"Travessera Rodrigo, 5, Ático 7º",ciudad:"Piura",producto:"images/producto.jpg" }
    
    ];

    console.log(producto1);
    $(producto1).each(function(index,value){
        console.log(value.nombres);
        var fila = "<tr>";
        fila += "<td>" + value.empresa + "</td>";
        fila += "<td>" + value.direccion + "</td>";
        fila += "<td>" + value.ciudad + "</td>";
        fila += "<td>" + value.producto + "</td>";
        fila += "</tr>";

        $("#tbody-producto1").append(fila);
    })