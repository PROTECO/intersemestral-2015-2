function prenderIphone(){
  var miIphone = document.getElementById("iphone");
  
  if(miIphone.src.match('apagado')){

    miIphone.src="img/prendido.jpg";
  }else{
    miIphone.src="img/apagado.png";
  }


}


function cambiarColor(){
  var texto = document.getElementById("texto");
  
  if(texto.style.color == "red"){
    texto.style.color = "black";
  }
  else{
    texto.style.color = "red";
  }
}


function cambiarTexto(){
  var cambiaTexto = document.getElementById("texto");
  cambiaTexto.innerHTML="HOLA!";

}

function ocultarElem(){
 var texto = document.getElementById("texto");
 var imagen = document.getElementById("iphone");

 texto.style.visibility = 'hidden';
 imagen.style.visibility = 'hidden'; 
}

function mostrarElem(){
 var text2 = document.getElementById("texto");
 var img2 = document.getElementById("iphone");

 text2.style.visibility = 'visible';
 img2.style.visibility = 'visible'; 
}



function validar(){
  var numero, mensaje, texto, expresion;
  numero = document.getElementById('numero').value;
  expresion = new RegExp("[A-Z]");

  if( expresion.test(numero) ){
    texto = "Correcto";
  }
  else{
    texto = "Incorrecto";
  }
  document.getElementById('mensaje').innerHTML = texto;

}


function cambiarTam(){
  var sel = document.getElementById("selector");
  var tam;
 
  if (sel.size > 1){
    sel.size = 1;
  }else{
    sel.size = 5;
  }
}

function bloqDesbloq(){
  var ok = document.getElementById("ok");
  var texto = document.getElementById("btn")


  if (ok.disabled == true){
    ok.disabled =false;
    texto.innerHTML = "Bloquear";

  }else{
    ok.disabled = true;
    texto.innerHTML = "Desbloquear";
  }
  

}
























