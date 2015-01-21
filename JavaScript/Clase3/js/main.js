function agregar(){
  var tipo = prompt("Ingresa el tipo de input");
  // Obtenemos el tipo de input
  var input = document.createElement("input");
//Creamos un elemento de input
  input.type= tipo;
  //Al atributo type le asignamos el valor que ingreso el usuario

  var div = document.getElementById("nombre");
  // Encontramos el contenedor donde vamos a insertar nuestro input
  div.appendChild(input);
  // Insertamos el elemento "hijo" a la lista


}