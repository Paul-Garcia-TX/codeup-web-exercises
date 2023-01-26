
let question = prompt("PLease enter a number:");
console.log("The user entered " + question);
let input = parseInt(question);

function showMultiplicationTable(input){
    for (let i = 1; i < 11; i++){
        console.log(input + " x " + i + " = " + (input * i));
    }

}
showMultiplicationTable(input);
//console.log(showMultiplicationTable());
//console.log("The multiplication table for " + input + " is " + showMultiplicationTable(input));
//alert("The multiplication table for " + input + " is " + showMultiplicationTable(input));

//I need a random number generator
//between 20 and 200
//only generate 10 responses
/**
let numberToStop = 200;
let luckyNumber = Math.floor(Math.random() * 20);

for ( let rando = luckyNumber; luckyNumber < 200; luckyNumber++){
    if (luckyNumber % 2 === 0 ) {
        //alert("The number is even");
        console.log(luckyNumber + " is even");
    } else {
       // alert("The number is odd");
        console.log(luckyNumber + " is odd.");
    }

}
 */
let x;
let y;

for (x=1; x < 10; x += 1) {
  let  z = '';
    for (y = 0; y < x; y += 1)
        z += x;
    console.log(z);
}

