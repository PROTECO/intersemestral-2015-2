var miVentana;


function abrirVentana(){
    
    miVentana = window.open(
        "http://www.trillonarios.com","_blank","toolbar=yes,location=yes,directories=no,status=no,menubar=yes,scrollbars=yes,resizable=no,copyhistory=yes,width=400,height=400");

}
function imprimirVentana(){
    
    var ventanaImpr = window.print();
}

function cerrarVentana(){
  if(miVentana){
    miVentana.close();
  }
}


function estatusVentana(){
  var mensaje;

  if(!miVentana){
    mensaje = "Nunca fue abierta";
  }else{
    if(miVentana.closed){
      mensaje = "se cerro la ventana";
    }else{
      mensaje = "Sigue abierta :D";
    }
  }

  document.getElementById("mens").innerHTML = mensaje;


}



function empezarTiempo(){
  var hoy = new Date();
  var h = hoy.getHours();
  var m = hoy.getMinutes();
  var s = hoy.getSeconds();

  m = checarTiempo(m);
  s = checarTiempo(s);

  document.getElementById("reloj").innerHTML = h+":"+m+":"+s;

  setTimeout(function(){empezarTiempo()}, 500);

}


function checarTiempo(param){
  if(param < 10){
    param= "0" + param;
  }
  return param;
}


























