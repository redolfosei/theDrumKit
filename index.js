//Get all drum elements and assign to a variable; 
var btnloopt = document.getElementsByClassName("drum");
//loop through a buttons 
for (var i = 0; i < btnloopt.length; i++) {
    //Clcik listener; 
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    //set buttonInnertheHTML variable to a specific key that was cliked    
    var buttonInnertheHTML = this.innerHTML;

    keyboardPlay(buttonInnertheHTML);
        //Animation when a button is clicked;
    buttomAnimate(buttonInnertheHTML);

        //Keyboard Press listener; 
    document.addEventListener("keydown",function (event){
    keyboardPlay(event.key); 
    buttomAnimate(event.key); //Animate when a key is pressed;
        });

    });
}

//Function with switch statements to assign specific keys to their sounds; 
function keyboardPlay(key) {
    switch (key) {
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
            
    }
}

//Function to create Animations; 
function buttomAnimate(currentKey) {
    var activebtn = document.querySelector("." + currentKey);
    //add pressed class in scc
        activebtn.classList.add("pressed");
    //use the setTimeout function to remove the press function after 100 milliseconds;    
        setTimeout(function(){
            activebtn.classList.remove("pressed");
        },100);
}


