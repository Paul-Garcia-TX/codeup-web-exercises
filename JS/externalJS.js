"use strict";
alert("Welcome to my website");

var favoriteColor = prompt("What is your favorite color?");
alert("Nice, " + favoriteColor + " is my favorite too!");


//Exercise 3 from previous chapter
/*Little Mermaid 3 days
* Brother bear 5 days
* Hercules 1 day\
* Price per day 3$*/
var price = 3;
var littleMerm = prompt("How many days did you have the Little Mermaid?");
var brotherB = prompt("How many days for Brother Bear?");
var Hercules = prompt("And how many days did you have Hercules?");

console.log("The user had little mermaid for " + littleMerm + " days. ");
console.log("The user had brother bear for " + brotherB + " days.");
console.log ("The user had Hercules for " + Hercules + " days.");


var a = parseInt(littleMerm);
var b = parseInt(brotherB);
var c = parseInt(Hercules);

var total = (a + b + c) * price;

alert("Your total is: " + total);

/* 3 companies
Google= 400 per hour
Amazon=380 per hour
Facebook350 per hour
*/

var Google = 400;
var Amazon = 380;
var Facebook = 350;

var hoursA = prompt("How many hours did you work for Google?");
var hoursB = prompt("How many hours did you work for Amazon?");
var hoursC = prompt("How many hours did you work for Facebook?");

var alpha = parseInt(hoursA);
console.log("User input " + hoursA + " hours for Google.");
var bravo = parseInt(hoursB);
console.log("User input " + hoursB + " hours for Amazon.");
var charlie = parseInt(hoursC);
console.log("User input " + hoursC + " hours for Facebook.");

var earnings = (alpha * Google) + (bravo * Amazon) + (charlie * Facebook);

console.log("The earnings should be " + earnings);

alert("Your earnings this week are :" + earnings + " dollars.");

/*Student can be enrolled only if
class is not full
class does not conflict

*/
let classFull = confirm("Is the class full?");
console.log(classFull);
let classConflict = confirm("Does this class conflict with your current schedule?");
console.log(classConflict);

if (classFull && classConflict) {
    alert("You cannot enroll in this class");
} else if (classFull != classConflict) {
    alert("You cannot enroll in this class");
} else {
    alert("You can enroll in the class");
}

/*
* product offer only if
* person buys more than 2
* offer has not expired
* premium members need not worry
*
*
* */
let quantity = prompt("How many are you buying?");
let expiration = confirm("Has the offer expired?");
let premium = confirm("Are you a premium member?");

let amount = parseInt(quantity);

if (expiration == true && amount < 2) {
    alert("You can not use this offer");
}
else if (amount < 2 || expiration == false){
    alert("You can not use this offer");
}
else if (premium == true && expiration ==  true) {
    alert("You can not use this offer");
}
else{
    alert("You can use this offer");
}

console.log("Sup dude from the external JavaScript");


// the following line will show the OK/CANCEL confirm dialog
var confirmed = confirm('Hello from External');
console.log(confirmed); // will be either true or false
console.log("Hey there from the outside");

alert("Welcome to the THUNDERDOME!");

var userInput = prompt('What weapon do you want to use?');
console.log('The user wants to use a(n): ' + userInput);
alert("Oooh a(n) " + userInput + "? Very nice");

alert("Now prepare yourself for Valhalla!");
