console.log("connected")

//Variables

const diceFaces = ["I", "II", "III", "IV", "V", "VI"];
//user roll all dice button
const userButtAll = document.getElementById("userButtAll");
const user1 = document.getElementById("userd1");
const user2 = document.getElementById("userd2");
const user3 = document.getElementById("userd3");
const user4 = document.getElementById("userd4");
const user5 = document.getElementById("userd5");
const user6 = document.getElementById("userd6");
const userDiceArray = [user1, user2, user3, user4, user5, user6];

//Oreo roll all dice button
const oreoButtAll = document.getElementById("oreoButtAll");
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
const anyIndividualDiceButton = document.querySelectorAll(".diceButt")
console.log(anyIndividualDiceButton)
const userButt1 = document.getElementById("userButt1") 
const userButt2 = document.getElementById("userButt2") 
const userButt3 = document.getElementById("userButt3") 
const userButt4 = document.getElementById("userButt4") 
const userButt5 = document.getElementById("userButt5") 
const userButt6 = document.getElementById("userButt6")

const oreoButt1 = document.getElementById("oreoButt1") 
const oreoButt2 = document.getElementById("oreoButt2") 
const oreoButt3 = document.getElementById("oreoButt3") 
const oreoButt4 = document.getElementById("oreoButt4") 
const oreoButt5 = document.getElementById("oreoButt5") 
const oreoButt6 = document.getElementById("oreoButt6") 

const allButtArray = [userButt1, userButt2, userButt3, userButt4, userButt5, userButt6, oreoButt1, oreoButt2, oreoButt3, oreoButt4, oreoButt5, oreoButt6]



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
anyIndividualDiceButton.forEach((item) => {
    item.addEventListener("click", function (event) {
    for (let i = 0; i <= 11; i++) {
        if (event.target === allButtArray[i]) {
        allDiceArray[i].textContent = displayDice();};       
    }; 
})
});

//for roll individual dice buttons this rolls all dice 
// anyIndividualDiceButton.forEach((item) => {
//     item.addEventListener("click", function anyDice (event) {
//     for (let i = 0; i <= 11; i++) {
//         if (event.target = allButtArray[i]) {
//         allDiceArray[i].textContent = displayDice();};       
//     }; 
// })
// });