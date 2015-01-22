$(document).load( main() );

function main(){
  //Creamos el contenedor overlay, imagen y parrafo
  var $overlay = $('<div id="overlay"></div>');
  var $image = $('<img>');
  var $caption = $('<p></p>');

  //Insertamos los elementos en su contenedor
  $overlay.append($image);
  $overlay.append($caption);
  $("body").append($overlay);

  $("#imageGallery a").click(function(event){
  event.preventDefault();

  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
  $( "#overlay" ).toggle( "bounce", { times: 3 }, "slow" );;



  

});




  $overlay.click(function(){

    $overlay.hide("slow");
  });



}








