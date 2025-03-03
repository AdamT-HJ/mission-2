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

//Message box for feedback to players <p>"messageBox"
let messageBox = document.getElementById("messageBox");

//User 'Roll Your Dice' Section
//whole section
const userRollSection = document.getElementById("userRollPrompt")
//Roll Count Text to change color when rolls = 4 and display message
const userRollCount4Message = document.getElementById("userRollCountWhiteText")

//Oreo 'Roll Your Dice' Section
const oreoRollSection = document.getElementById("oreoRollPrompt")
//Roll Count Text to change color when rolls = 4 and display message
const oreoRollCount4Message = document.getElementById("oreoRollCountWhiteText")


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
//clearing text content for box 1s as they show messages relating to score, want to avoid conflicting messages
oreoButtArrayAll7.forEach((item => {
    item.addEventListener("click", function (event) {
        for (let i = 0; i<=6; i++){ 
        if (event.target === oreoButtArrayAll7[i]) {
            (jsOreoCount +=1); (oreoCount.textContent = jsOreoCount)}}
        if (jsOreoCount === 4) {
            oreoRollCount4Message.style.color = "black"
            oreoButtAll.style.display = "none"
            oreoButt1.style.display = "none"
            oreoButt2.style.display = "none"
            oreoButt3.style.display = "none"
            oreoButt4.style.display = "none"
            oreoButt5.style.display = "none"
            oreoButt6.style.display = "none"
        }
            // oreoModal.style.display = "block"}
        // else if (jsOreoCount >4) {
        //     oreoModal.style.display = "block"
        //     oreoModalMessageBox2.textContent = "I told you 4's the limit. You're bust, now get out!"}
        }
    )}));

//Counter for User Dice
//make background black and disappear button to stop rolling at 4 count, couldnt do modal as conflicting messages with score modal. elements in an array are not DOM objects so had to change each button individually as for loop to cycle through them did not work.
userButtArrayAll7.forEach((item => {
    item.addEventListener("click", function (event) {
        for (let i = 0; i<=6; i++){ 
        if (event.target === userButtArrayAll7[i]) {
            (jsUserCount +=1); (userCount.textContent = jsUserCount)}}
        if (jsUserCount === 4) {
            userRollCount4Message.style.color = "black"
            userButtAll.style.display = "none"
            userButt1.style.display = "none"
            userButt2.style.display = "none"
            userButt3.style.display = "none"
            userButt4.style.display = "none"
            userButt5.style.display = "none"
            userButt6.style.display = "none"  
        }
        
            // userModal.style.display = "block"}
        //     userModalMessageBox2.textContent = "That's all your rolls, hold them dice partner."}
        // else if (jsUserCount >4) {
        //     userModal.style.display = "block"
        //     userModalMessageBox2.textContent = "I told you 4's the limit. You're bust, now get out!"} 
        }
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
// in JS counter for score translate to element on page as per roll counters. Have counters for each oreo score in an array, sum array.
//need to change dice faces 


// OREO SCORE COUNTER SECTION
//variables to store an array of converted scores for each of oreos dice. Then variable to sum them for a total/
let oreoScoreArray = [];
let oreoScoreTotal = 0;

console.log(oreoScoreTotal);

//Value converter

// same event listener for user buttons or oreo buttons, then call score function on each press, using if else.

// function check dice array index against dice face index and assign value for running total?

//function to check a single dice score and return it to a running total array
function oreoScoreRunningTotal (dice) {
    if (dice.textContent === "I") {return(oreoScoreArray.push (1))}
     else if (dice.textContent === "II"){return(oreoScoreArray.push (2))}
     else if (dice.textContent === "III"){return(oreoScoreArray.push (3))}
     else if (dice.textContent === "V"){return(oreoScoreArray.push (5))}
     else if (dice.textContent === "X"){return (oreoScoreArray.push (10))}  
};


console.log(oreo1.textContent);
console.log(oreoScoreArray);


//loop to apply dice score function to all dice and return it to score array. the 'diceArray parameter is for the user or Oreo Dice array.
function diceScoreToAll () {
for (let i = 0; i < oreoDiceArray.length; i++ )
    oreoScoreRunningTotal(oreoDiceArray[i]);
};

//undefined since console.log does not explicitly return something, it has the side effect of printing to the console.
// console.log(diceScoreToAll(oreoDiceArray));

// console.log(oreoDiceArray);
// console.log(oreoScoreArray);

//for loop to total oreo score array length and store it in variable oreoScoreTotal - need this to run on each dice button click so score will update - make it a function
 function oreoScoreJsUpdate () {
    for (let i = 0; i < oreoScoreArray.length; i++) {
    oreoScoreTotal += oreoScoreArray[i];
    };
}

oreoScoreJsUpdate();
console.log(oreoScoreTotal);

//linking JS variable for oreoScoreTotal to html
let oreoScore = document.getElementById("oreoScore");

//function to update HTML oreo score with value in JS score.
function oreoScoreUpdateHtmlFunction () {
    return (oreoScore.textContent = oreoScoreTotal);
};

// event listener for click of any oreo buttons, to update score.
// oreoScoreUpdateHtmlFunction();
//need function to set total to 0 each time as well at the start
//messagebox 2 content to empty "" as this message box is for roll count, dont want conflicting messages
function oreoScoreReset () {
        oreoScoreTotal = 0
    };


oreoButtArrayAll7.forEach(item => {
    item.addEventListener("click", function (event) {
        for (let i = 0; i<=6; i++){ 
            if (event.target === oreoButtArrayAll7[i]) {   
            oreoScoreReset()
            oreoScoreArray = [];
            diceScoreToAll() 
            oreoScoreReset()
            oreoScoreJsUpdate()
            oreoScoreUpdateHtmlFunction()
            if (oreoScoreTotal >= 30){
                oreoModal.style.display = "block"
                oreoModalMessageBox1.textContent = `${oreoScoreTotal} You're Bust. Get out`
                oreoButtAll.style.display = "none"
                oreoButt1.style.display = "none"
                oreoButt2.style.display = "none"
                oreoButt3.style.display = "none"
                oreoButt4.style.display = "none"
                oreoButt5.style.display = "none"
                oreoButt6.style.display = "none"
            ; }}}})})

console.log(oreoScoreTotal);

;

//Now I have to do it for the user because my code is dogs%^t

// OREO SCORE COUNTER SECTION
//variables to store an array of converted scores for each of oreos dice. Then variable to sum them for a total/
let userScoreArray = [];
let userScoreTotal = 0;

console.log(userScoreTotal);

//Value converter

// same event listener for user buttons or oreo buttons, then call score function on each press, using if else.

// function check dice array index against dice face index and assign value for running total?

//function to check a single dice score and return it to a running total array
function userScoreRunningTotal (dice) {
    if (dice.textContent === "I") {return(userScoreArray.push (1))}
     else if (dice.textContent === "II"){return(userScoreArray.push (2))}
     else if (dice.textContent === "III"){return(userScoreArray.push (3))}
     else if (dice.textContent === "V"){return(userScoreArray.push (5))}
     else if (dice.textContent === "X"){return (userScoreArray.push (10))}  
};


console.log(user1.textContent);
console.log(userScoreArray);


//loop to apply dice score function to all dice and return it to score array. the 'diceArray parameter is for the user or Oreo Dice array.
function userDiceScoreToAll () {
for (let i = 0; i < userDiceArray.length; i++ )
    userScoreRunningTotal(userDiceArray[i]);
};

//undefined since console.log does not explicitly return something, it has the side effect of printing to the console.
// console.log(diceScoreToAll(oreoDiceArray));

// console.log(oreoDiceArray);
// console.log(oreoScoreArray);

//for loop to total oreo score array length and store it in variable oreoScoreTotal - need this to run on each dice button click so score will update - make it a function
 function userScoreJsUpdate () {
    for (let i = 0; i < userScoreArray.length; i++) {
    userScoreTotal += userScoreArray[i];
    };
}

userScoreJsUpdate();
console.log(userScoreTotal);

//linking JS variable for oreoScoreTotal to html
let userScore = document.getElementById("userScore");

//function to update HTML oreo score with value in JS score.
function userScoreUpdateHtmlFunction () {
    return (userScore.textContent = userScoreTotal);
};

// event listener for click of any user buttons, to update score.
// oreoScoreUpdateHtmlFunction();
//need function to set total to 0 each time as well at the start
//messagebox 2 content to empty "" as this message box is for roll count, dont want conflicting messages
// elements in an array are not DOM objects so had to change each button individually as for loop to cycle through them did not work.
function userScoreReset () {
        userScoreTotal = 0
    };


userButtArrayAll7.forEach((item => {
    item.addEventListener("click", function (event) {
        for (let i = 0; i<=6; i++){ 
            if (event.target === userButtArrayAll7[i]) {   
            userScoreArray = [];
            userDiceScoreToAll() 
            userScoreReset()
            userScoreJsUpdate()
            userScoreUpdateHtmlFunction()
            if (userScoreTotal >= 30){
                userModal.style.display = "block"
                userModalMessageBox1.textContent = `${userScoreTotal} You're Bust. Get out`
                userButtAll.style.display = "none"
                userButt1.style.display = "none"
                userButt2.style.display = "none"
                userButt3.style.display = "none"
                userButt4.style.display = "none"
                userButt5.style.display = "none"
                userButt6.style.display = "none"
            ; }}}})}));

            
console.log(userScoreTotal);
console.log(jsUserCount);
console.log(userScore.textContent);

//next modals for pop up messages

//User Modal Variables
// message box 1 is used for score, message box 2 is used for number of rolls.
//To avoid conflicting messages there are 2 modals, one for user messages and one for oreo messages
//Originally had modal messages for both score and number of rolls. However since the score/rolls happen entirely within seperate blocks of code I could not avoid conflicting messages due to scope/the order of code in my JS. Instead now remove roll button and change background color to display white text message when reached 4 rolls.
const userModal = document.getElementById("messageModal1");
const userCloseSpan = document.getElementById("closeUserModal");
const userModalMessageBox1 = document.getElementById("modalMessageBoxUser1")
const userModalMessageBox2 = document.getElementById("modalMessageBoxUserBox2")

//Oreo Modals Variables
const oreoModal = document.getElementById("messageModal2");
const oreoCloseSpan = document.getElementById("closeOreoModal");
const oreoModalMessageBox1 = document.getElementById("modalMessageBoxOreo1")
const oreoModalMessageBox2 = document.getElementById("modalMessageBoxOreo2")



userCloseSpan.onclick = function(){
    userModal.style.display = "none";
}

oreoCloseSpan.onclick = function(){
    oreoModal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == userModal) {
        userModal.style.display = "none";
    }
};

window.onclick = function(event) {
    if(event.target == oreoModal) {
        oreoModal.style.display = "none";
    }
};

//Next prompt on load to give names for player1 and player 2, if not default to player1 & player 2

//Check winner: 
//problem is, score check and roll check occur specifically in 2 different functions, not sure I can write an IF statement to compare these.

// use event listener triggered when both background colors are black to check and compare scores and display a message?