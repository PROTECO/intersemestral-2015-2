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
  });


  $overlay.click(function(){
    $overlay.hide("slow");
  });

  $("#imageGallery a").mouseover(function(){
    $( this ).animate({
        opacity: 1,
        height: "toggle"
      }, 5000);
  });



}








