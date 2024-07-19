// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: 'Red Rising',
    author: 'Pierce Brown',
    year: 2014,
};
console.log(book);
console.log('------------------');

// Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${book.title}, Author: ${book.author}`); // ? can also be printed using book['title'] and book['author']
console.log('------------------');

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book title and author, and log the result of calling this method.
book.bookDetails = function(){
    return `The book is ${book.title} by ${book.author}`;
};
console.log(book.bookDetails());
console.log('------------------');

// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property, then log the updated object.
book.updateYear = function(year){
    this.year = year;
};
book.updateYear(2022);
console.log(book);
console.log('------------------');

// Activity 3: Nested Objects

// Task 5: Create a nested object respresenting a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "St. Xavier's Library",
    books: [
        {
            title: "The Mysterious Affair at Styles",
            author: "Agatha Christie",
            year: 1920
        },
        {
            title: "The Martian",
            author: "Andy Weir",
            year: 2011
        },
        {
            title: "Redshirts",
            author: "John Scalzi",
            year: 2012
        },
        {
            title: "The House of Leaves",
            author: "Mark Z. Danielewski",
            year: 2000
        }
    ]
}
console.log(library);
console.log('------------------');

// Task 6: Access and log the name of the library and the titles of all the books in the library.
let libName = library.name;
let titles = library.books.map((book) => book.title);
console.log(`The library is ${libName} and it has the following titles: ${titles.join(', ')}`);
console.log('------------------');

// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.bookDetails2 = function(){
    return `The book is ${this.title} and it was published in ${this.year}`;
};
console.log(book.bookDetails2());
console.log('------------------');

// Activity 5: Object Iteration

// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (let property in book) {
    console.log(`${property}: ${book[property]}`);
}
console.log('------------------');

// Task 9: Use Object.keys and Object. values methods to log all the keys and values of the book object.
let keyValue = Object.keys(book)
console.log(keyValue);

let bookValue = Object.values(book)
console.log(bookValue);