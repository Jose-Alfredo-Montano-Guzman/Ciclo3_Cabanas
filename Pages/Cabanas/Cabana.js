function traerInformacion(){
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type: "GET", /* or type:"GET" or type:"PUT" */
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        },
        error: function () {
            console.log("error");
        }
    });
}

function pintarRespuesta(items){

    let myTable="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].rooms+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });

}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),

    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("se ha Actualizado")
        }
    });
}

function borrarElemento(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}

