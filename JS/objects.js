(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person ={};

    person.firstName = "Rick";
    person.lastName = "Sanchez";

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = "Hello from ";

    console.log(person);

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180
     * Ryan $250
     * and George $320
     * . Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

     var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
     ];


    shoppers.forEach( function(shoppers){
        if (shoppers.amount > 200){
            alert("Hi " + shoppers.name + ". You've spent $" + shoppers.amount + " dollars. You get a discount of 12%");
            let doMath = shoppers.amount * 0.12;
            let newTotal = shoppers.amount - doMath;
            console.log(shoppers.name + " original total was "+shoppers.amount + ". They get a discount of $" + doMath + " dollars.");
            console.log(shoppers.name +"'s new total is $" + newTotal);
            console.log("------NEXT SHOPPER------");
            alert("Your new total is $" + newTotal);
        }
        else {
            alert("Sorry, " + shoppers.name + " You have only spent $" + shoppers.amount + ". You don't get a discount. Your total is still $" + shoppers.amount);
            console.log(shoppers.name + " did not spend enough to get a discount");
            console.log(shoppers.name + " total is $" + shoppers.amount);
            console.log("------NEXT SHOPPER------");
        }

    });


    console.log("-------------------");
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    let books = [
        {title: 'Harry Potter and the Prisoner of Azkeban', author: {First: 'JK', Last: 'Rowling'}},
        {title: 'A song of Ice and Fire', author: {First: 'George', Last: 'RR. Martin',}},
        {title: 'Ready Player One', author: {First: 'Ernest', Last: 'Cline'}},
        {title: 'Gone Girl', author: {First: 'Gillian', Last: 'Flynn'}},
        {title: 'Where the Crawdads Sing', author: {First: 'Delia', Last: 'Owens'}},
    ]

    books.forEach(function(book,index){
        console.log("Book #" + (index + 1));
        console.log("Title: " +book.title);
        console.log("Written by: " + book.author.First + " " + book.author.Last);
        console.log("--------------");
    });

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
      function createBook () {
        let netbook = {
            title: prompt("What is the name of your book?"),
            author: {
                first: prompt("What is the author's first name?"),
                last: prompt("What is their last name"),
            },
        };
            console.log("The user input " + netbook.title + " as the name of the book and " + netbook.author.first + " " + netbook.author.last + " as the author");
            return netbook;

    }

    books.push(createBook());

    console.log(books);

})();