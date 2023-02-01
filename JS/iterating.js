

(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names = ['John', "Paul", "George", "Ringo"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
console.log("------------");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
names.forEach(function(names){
    console.log("Here is one of the names: " + names + ".");
    });
    console.log("------------");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
 for (let i = 0; i < names.length; i++) {

     console.log("The name at index " + i + " is: " + names[i]);
 }
    console.log("------------");
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(names){
        console.log("Here is one of the names: " + names + ".");
    });
    console.log("------------");
console.log("The names of the Beetles are " + names);
    console.log("------------");
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

let numbers = [1, 2, 3, 4, 5];
    console.log(numbers);

    function first(){
    return console.log(numbers[0]);
}
first();
function second(){
    return console.log(numbers[1]);
}
second();

function last (){
    return console.log(numbers[4]);

}
last();



})();