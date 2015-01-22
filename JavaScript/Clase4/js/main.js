$(document).load(principal());


function principal(){
  var boton = $('#btn-action');
  boton.click(cambiar);
  boton.mouseover(arriba);
  boton.click(fuera);

}


/********************Libreria*****************************/

function fuera(){
  // var parrafo1 = document.getElementById('');
  //               document.getElementsByTagName('')
  //               document.getElementsByClassName('')

  var parrafo1 = $('#news');
  
  // parrafo1.style.background = "red";
  
  parrafo1.css("background", "none");

}



function cambiar(){
  // var parrafo1 = document.getElementById('');
  //               document.getElementsByTagName('')
  //               document.getElementsByClassName('')

  var parrafo1 = $('#news');
  
  // parrafo1.style.background = "red";
  
  parrafo1.css("background", "red");

  }


function arriba(){
  var parrafo1 = $('#news');
  
  // parrafo1.style.background = "red";
  
  parrafo1.css("background", "blue");

}

