
var variable = "Hola ";
var variable2 = "Mundo";



//alert(variable+variable2);

variable = 232;

//alert(variable+variable2);
/**/

var arreglo = ["Lunes","Martes", "Miercoles"]

//alert("Hoy es "arreglo[0]);
//alert(noinicializada);


var objetos = [variable,variable2]

//alert(objetos[0]+objetos[1])

//var nombreUsuario = prompt("Ingresa tu nombre","Anonimo")
//alert("Bienvenido "+nombreUsuario);

var x = 3.1415900000303003030320230
var y = 34

var z = 123e5  // 12,300,000
var w = 123e-5 // .00123

var a = x.toExponential();
//alert(7+a);

/*
  + Suma
  - resta
  * Multiplicacion
  / division
  % Modulo
  ++ Incremento
  -- Decremento
*/

var resultado = x+y;
resultado = x-y;

variable += variable2;

/*
  Operadores de Comparacion
  == iguales
  != no iguales
  === Valor igual ,tipo de dato
  !== valor no igual, tipo de dato no igual
  > Mayor
  < Menor
  >= Mayor o igual
  <= Menor Igual
*/

x="hola";
//alert(parseInt(x)+1)

z = 848438;
z = z.toString();

function muestraNombre () {
  var nombre = prompt("Cual es tu nombre");
  alert("Tu nobre es: "+ nombre);
}


function suma(a,b){
  /*var a = pedirDatos();
  var b = pedirDatos();*/
  alert(a+b)
}

function resta (){
  var a = pedirDatos();
  var b = pedirDatos();
  alert(a-b)
}

function pedirDatos () {
  c = prompt("Dame un numero")
  return parseInt(c);
}

suma(2,5);












