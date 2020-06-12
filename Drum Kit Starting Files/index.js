
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
//    var audio = new Audio("sounds/crash.mp3");
//    audio.play();
      this.style.color = "white";
      this.style.textShadow = "3px 0 #DA0463";
  } );
}
