
for (let question = prompt("Pick an odd number between 1 and 50")) {
    if (question % 2 === 0) {
        alert("That was an even number, please pick an ODD number");

    }
    else {
        alert("Thank you");
        console.log(question);
    }
}
