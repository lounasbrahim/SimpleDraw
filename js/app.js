var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//quand on click sur le conrols
$(".controls").on("click", "li", function(){
  //deslectioner les siblings items
  $(this).siblings().removeClass("selected");
  //selectionner les elements
  $(this).addClass("selected");
  //cache la  cette color 
  color = $(this).css("background-color");
});
  
//quand 'new color ' est cliqué
$("#revealColorSelect").click(function(){
  //faire apparaitre ou disparaitre le changeur de coleur
  changeColor();
  $("#colorSelect").toggle();
});

//mise a jour de la nouvelle coleur  span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//quand la coleur du slider change
$("input[type=range]").change(changeColor);

//quand 'add color ' est cliqué
$("#addNewColor").click(function(){
  //append la coleur a  controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Selectioner la new color
  $newColor.click();
});

//la souris event sur le  canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Dessine lignes
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});



  







