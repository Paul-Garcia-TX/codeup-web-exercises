
function counting () {
    let question;
    while(true){
        question = parseInt(prompt("Please enter an odd number between 1 and 50"));
        console.log(question + " is what the user entered.");

        if(question % 2 !== 0 && question > 0 && question <= 50){
            break;
        }
        if (question % 2 === 0 && question < 50) {
            console.log("User input is: " + question);
            alert("That was an even number, please pick an ODD number");



        } else if (question > 50) {
            console.log("User input is: " + question);
            alert("that was too high, please keep it under 50");


        } else if (question < 0) {
            console.log("User input is: " + question);
            alert("That number is too low, please keep it between 1 and 50.");

        }

            console.log("User input is: " + question);
            alert("Thank you");


    }
    return question;
}




let numberToSkip = counting();

for (let i = 1; i <= 50; i++) {

    if ( i % 2 !== 0) {

      // console.log(i);
        if (numberToSkip === i){
            console.log("Skipping " + numberToSkip);
        }
        else {
            console.log(i);
        }

    }





}






