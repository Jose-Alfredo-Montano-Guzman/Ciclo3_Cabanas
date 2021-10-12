function traerInformacion(){
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="<td> <button onclick='borrarElemento("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
            traerInformacion();
            alert("se ha guardado el dato")
        }
    });

}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        messagetext:$("#messagetext").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#messagetext").val("");
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
        url:"https://g6252fa2d96d156-db202109302119.adb.us-sanjose-1.oraclecloudapps.com/ords/admin/message/message",
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

