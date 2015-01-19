function cambiarTexto(){

// alert(document.getElementById("saludo").innerHTML);
// alert(document.getElementsByTagName("div")[0]);
// alert(document.getElementsByClassName("navbar")[0]);
// && AND
// || OR

var correo = document.getElementById("input_name").value;
var pass = document.getElementById("input_pass").value;


if(correo == "jared@gmail.com" && pass == "123"){
  document.getElementById("saludo").innerHTML = "Hola Jared";
}else{
  document.getElementById("saludo").innerHTML = "Prohibido";
}




// onchange = cuando un elemento HTML ha cambiado
// onclick = cuando el usuario da click en el elemento

// onmouseover = cuando el usuario pasa el cursor sobre el elemento
// onmouseout = cuando el cursor sale del elemento

// onkeydown = cuando el usuario aprieta una tecla
//   onkeypress = el usuario presiona
//   onkeyup = el usuario suelta

// onload = cuando el navegador termina de cargar la pagina

}