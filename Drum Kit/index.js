//Selecting all drum buttons and going over them 1 by one in a loop by class .drum

let numOfDrumBtn = document.querySelectorAll(".drum").length;

for (let i=0;i< numOfDrumBtn; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

    function handleClick() {
        
        let buttonInnerHTML = this.innerHTML;
        // On click sound
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)
       
    }
}
// Listening to presses on the keyborad
document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    buttonAnimation(event.key)
})  


// funcion to make a sounds
function makeSound(key) {


    switch (key) {
        case "w":
            let audioW = new Audio('sounds/tom-1.mp3');
            audioW.play();

            break;

        case "a":
            let audioA = new Audio('sounds/tom-2.mp3');
                audioA.play();
                break;
        
        case "s":
                let audioS = new Audio('sounds/tom-3.mp3');
                audioS.play();
                break;

        case "d":
               let audioD = new Audio('sounds/tom-4.mp3');
                audioD.play();
                 break;
        
                 case "j":
                    let audioJ = new Audio('sounds/snare.mp3');
                    audioJ.play();
                    break;
              
                    case "k":
                        let audioK = new Audio('sounds/crash.mp3');
                        audioK.play();
                        break;
              
                        case "l":
                            let audioL = new Audio('sounds/kick-bass.mp3');
                            audioL.play();
                            break;
                          
        default:
            break;
    }
}

// Function to make buutons blur and set cusome class on CSS when pressed
function buttonAnimation(currentKey) {
    let activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.toggle("pressed"); // could use add

    setTimeout(function() {
        activeBtn.classList.toggle("pressed"); // could use remove
    },100);
}