
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


for (let i = 0; i < 10; i++) {

    let randomNumber = Math.floor(Math.random() * 200);

    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

let x;
let y;

for (x = 1; x < 10; x += 1) {
  let  z = '';
    for (y = 0; y < x; y += 1)
        z += x;
    console.log(z);
}

for (let i = 100; i > 0; i -= 5){
    console.log(i);
}