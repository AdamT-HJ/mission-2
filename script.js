console.log("connected")

// function roll (dice) {
//     return(Math.floor(Math.random()*7));
// }

// console.log(roll());

const diceFaces = ["I", "II", "III", "IV", "V", "VI"];

function displayDice (){
    let roll = (Math.floor(Math.random()*6)+1);
    // for (face of diceFaces) {
        if(roll === 1) {
            return(diceFaces[0]);
        } else if (roll === 2) {
            return(diceFaces[1]);
        } else if (roll === 3) {
            return(diceFaces[2]); 
        } else if (roll === 4) {
            return(diceFaces[3]); 
        } else if (roll === 5) {
            return(diceFaces[4]); 
        } else if (roll === 6) {
            return(diceFaces[5]);
        } else
            return("Error");
};   

//Note need to adjust this so that it doesnt result math.random giving a value of '0' which gives me an error.
//could also change array to array of images for dice. but think back ground image with roman numerals over top will be easier.
//could shorten this to display = indice of roll.
//What are you doing - you are stupid. why is there a loop, here you idiot.

console.log(displayDice());


