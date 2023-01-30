alert("Hi welcome to basket case ice cream!");

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;


console.log(allCones);


console.log(allCones);



do {
    let transaction =  prompt("How many are you buying?");

    let remainder = allCones - transaction;
    if (transaction > remainder){
        alert("Ok that will be " + transaction + " ice creams. Thank you!");
    }
    else if (transaction > remainder){
        alert("Sorry, I don't have that many ice cream cones to sell");
    }
    console.log(remainder);

}

while (allCones < 50){
    console.log("The amount remaining is " + remainder);

}