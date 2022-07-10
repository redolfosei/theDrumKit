
var btnloopt = document.getElementsByClassName("drum");
for (var i = 0; i < btnloopt.length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        
    var buttonInnertheHTML = this.innerHTML;

        switch (buttonInnertheHTML) {
            case "w":
                var tom_1 = new Audio('sounds/tom-1.mp3');
                tom_1.play();
                break;
            
            case "a":
                var tom_2 = new Audio('sounds/tom-2.mp3');
                tom_2.play();
                break;

            case "s":
                var tom_3 = new Audio('sounds/tom-3.mp3');
                tom_3.play();
                break;
                
            case "d":
                var tom_4 = new Audio('sounds/tom-4.mp3');
                tom_4.play();
                break;
                
            case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
                
            case "k":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
                
            case "l":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();    
                break;
        
            default: console.log(buttonInnertheHTML);
                break;
        }


    });
}





