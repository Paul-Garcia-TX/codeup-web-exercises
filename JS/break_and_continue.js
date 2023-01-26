

for (let i = 1; i <50;  i ++) {
    let question = prompt("Please enter a number between 1 and 50")

    if (question % 2 === 0 && question < 50 ) {
        alert("That was an even number, please pick an ODD number");

    }
    else if (question > 50){
        alert("that was too high, please keep it under 50");

    }
    else if (question < 0){
        alert("That number is too low, please keep it between 1 and 50.");

    }

    else {
        alert("Thank you");
        console.log(question);

    }

    if (question % 2 !== 0 && question < 50) {
        console.log(question);
        question ++;

    }
    break;
}

