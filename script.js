console.log("connected")

//Variables

//Dice Faces
const diceFaces = ["I", "II", "III", "V", "V", "X"];

//user roll all dice button

const user1 = document.getElementById("userd1");
const user2 = document.getElementById("userd2");
const user3 = document.getElementById("userd3");
const user4 = document.getElementById("userd4");
const user5 = document.getElementById("userd5");
const user6 = document.getElementById("userd6");
const userDiceArray = [user1, user2, user3, user4, user5, user6];

//Oreo roll all dice button

const oreo1 = document.getElementById("oreod1");
const oreo2 = document.getElementById("oreod2");
const oreo3 = document.getElementById("oreod3");
const oreo4 = document.getElementById("oreod4");
const oreo5 = document.getElementById("oreod5");
const oreo6 = document.getElementById("oreod6");
const oreoDiceArray = [oreo1, oreo2, oreo3, oreo4, oreo5, oreo6];

//roll individual dice buttons
//Dice Faces
const allDiceArray = [...userDiceArray, ...oreoDiceArray]
console.log(allDiceArray);

//Dice Buttons
//user buttons
const anyIndividualDiceButton = document.querySelectorAll(".diceButt")
console.log(anyIndividualDiceButton)

//user roll all button
const userButtAll = document.getElementById("userButtAll");

const userButt1 = document.getElementById("userButt1") 
const userButt2 = document.getElementById("userButt2") 
const userButt3 = document.getElementById("userButt3") 
const userButt4 = document.getElementById("userButt4") 
const userButt5 = document.getElementById("userButt5") 
const userButt6 = document.getElementById("userButt6")





//oreo roll all button
const oreoButtAll = document.getElementById("oreoButtAll");

const oreoButt1 = document.getElementById("oreoButt1") 
const oreoButt2 = document.getElementById("oreoButt2") 
const oreoButt3 = document.getElementById("oreoButt3") 
const oreoButt4 = document.getElementById("oreoButt4") 
const oreoButt5 = document.getElementById("oreoButt5") 
const oreoButt6 = document.getElementById("oreoButt6") 


//array of all individual buttons for Oreo and user
const allButtArray = [userButt1, userButt2, userButt3, userButt4, userButt5, userButt6, oreoButt1, oreoButt2, oreoButt3, oreoButt4, oreoButt5, oreoButt6]

//variable for the two both roll al dice buttons
const bothRollAllDiceButtons = [userButtAll, oreoButtAll];

//array of individual dice roll oreo buttons & oreo roll all button
const oreoButtArrayAll7 = [oreoButt1, oreoButt2, oreoButt3, oreoButt4, oreoButt5, oreoButt6, oreoButtAll];

//array of individual dice roll user buttons & user roll all button
const userButtArrayAll7 = [userButt1, userButt2, userButt3, userButt4, userButt5, userButt6, userButtAll];



//User & Oreo Counters
let userCount = document.getElementById("userCount")
let oreoCount = document.getElementById("oreoCount")

//variables for ALL userdicebuttons & ALL oredicebuttons (using their class)
const oreoDiceButton = document.querySelectorAll(".oreoDiceButton")
console.log(oreoDiceButton);

const userDiceButton = document.querySelectorAll(".userDiceButton")
console.log(userDiceButton);

//array of ALL of user and oreo buttons
const everyonesButtons = [oreoDiceButton, userDiceButton];

//Un-nested array of ALL user and oreo Buttons
const everyonesButtonsUnNested = [userButt1, userButt2, userButt3, userButt4, userButt5, userButt6, userButtAll, oreoButt1, oreoButt2, oreoButt3, oreoButt4, oreoButt5, oreoButt6, oreoButtAll];
console.log(everyonesButtonsUnNested);


//Functions
//function to roll dice and give roman numeral result for display using dicefaces array

function displayDice (){
    let roll = (Math.floor(Math.random()*6));
        return(diceFaces[roll])
    };
    
    console.log(displayDice());

// dont actually need any of this you idiot
//         if(roll === 1) {
//             return(diceFaces[0]);
//         } else if (roll === 2) {
//             return(diceFaces[1]);
//         } else if (roll === 3) {
//             return(diceFaces[2]); 
//         } else if (roll === 4) {
//             return(diceFaces[3]); 
//         } else if (roll === 5) {
//             return(diceFaces[4]); 
//         } else if (roll === 6) {
//             return(diceFaces[5]);
//         } else
//             return("Error");
// };   

//for roll all user dice button
userButtAll.addEventListener("click", function () {
     for (let i = 0; i <= 5; i++) {
    (userDiceArray[i].textContent = displayDice())}  
});

//for roll all oreo dice button
oreoButtAll.addEventListener("click", function () {
    for (let i = 0; i <= 5; i++) {
   (oreoDiceArray[i].textContent = displayDice())}  
});

//for roll individual dice buttons this rolls all dice 
//This listens for any individual dice button to be pressed using an array, then the button that was then with a loop checks which button was the target by matching it with an array of the buttons. Once it knows, it changes the die that corresponds to the button with the same [i] value using the display dice 'roll' function. It does this with a loop, it works because the button array and dice array match index 0, is button 1 and dice 1 in each array.
anyIndividualDiceButton.forEach((item) => {
    item.addEventListener("click", function (event) {
    for (let i = 0; i <= 11; i++) {
        if (event.target === allButtArray[i]) {
        allDiceArray[i].textContent = displayDice();};       
    }; 
})
});


let jsUserCount = 0;
let jsOreoCount = 0;


//the replace str with value part of this isnt working try figuring it out with clg above
//Counters
// bothRollAllDiceButtons.forEach((item => {
//     item.addEventListener("click", function (event) {
//         if (event.target === userButtAll) {
//             (jsUserCount +=6); (userCount.textContent = jsUserCount);
//         } else {(jsOreoCount += 6); (oreoCount.textContent = jsOreoCount);} 
//     })
// }));

//Counter for Oreo Dice
oreoButtArrayAll7.forEach((item => {
    item.addEventListener("click", function (event) {
        for (let i = 0; i<=6; i++){ 
        if (event.target === oreoButtArrayAll7[i]) {
            (jsOreoCount +=1); (oreoCount.textContent = jsOreoCount)}}}
    )}));

//Counter for User Dice
userButtArrayAll7.forEach((item => {
    item.addEventListener("click", function (event) {
        for (let i = 0; i<=6; i++){ 
        if (event.target === userButtArrayAll7[i]) {
            (jsUserCount +=1); (userCount.textContent = jsUserCount)}}}
    )}));


// } else if (event.target === everyonesButtonsUnNested[i]) {(jsOreoCount += 1); (oreoCount.textContent = jsOreoCount);}}

// console.log(parseInt(oreoCount.textContent) +=1);
//game = each die is 1 X, 2 V's, 3 I's.
// X = 10, V = 5, I = 1
// The maximum possible score is 60, so lets say you have to get as close to 30 as possible without going over.
//rolls are put into an array as numbers and summed up = score

// everyonesButtons.forEach(playersButtons => {
//     playersButtons.forEach(button => {console.log(button)});
// });


//score counter 
// in JS counter for score translate to element on page as per roll counters.
//need to change dice faces 

let oreoScore = 0

//Value converter

// same event listener for user buttons or oreo buttons, then call score function on each press, using if else.

// function check dice array index against dice face index and assign value for running total?


function oreoScoreRunningTotal (dice) {
    if (dice.textContent === "I") {return(oreoScore += 1)}
     else if (dice.textContent === "II"){return(oreoScore += 2)}
     else if (dice.textContent === "III"){return(oreoScore += 3)}
     else if (dice.textContent === "V"){return(oreoScore += 5)}
     else {return oreoScore += 10}  
};

console.log(oreoScoreRunningTotal(oreo1));

console.log(oreo1.textContent);
console.log(oreoScore);

// now find way to apply function to check each players dice everytime there's a roll.