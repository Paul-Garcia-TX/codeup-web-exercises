
// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;



alert("Hi welcome to basket case ice cream!");




console.log("Number of cones available: " + allCones);

while (allCones >= 0) {
    let transaction = prompt("How many are you buying?");

    function selling() {
        if (transaction <= allCones) {
            allCones -= transaction;
            alert("Ok that will be " + transaction + " ice creams. Thank you!");
            console.log(transaction + " purchased");
            console.log(allCones + " remaining.");
        } else if (transaction > allCones) {
            alert("Sorry, I don't have that many ice cream cones to sell. I only have " + allCones + " to sell.");
        }

        return allCones;
    }

    allCones = selling();

    if (allCones === 0) {
        alert("Sorry I'm all out of cones to sell. Come back again someday!");
        break;
    }
}

