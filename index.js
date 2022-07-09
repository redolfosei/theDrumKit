
var btnloopt = document.getElementsByClassName("drum");
for (var i = 0; i < btnloopt.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        this.style.color = "blue";


    });
}



// var tom_1 = new Audio('sounds/tom-1.mp3');
// tom_1.play();