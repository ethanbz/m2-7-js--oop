// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
    constructor(t, g, a, r) {
        this.title = t;
        this.genre = g;
        this.author = a;
        this.isRead = r || false;
    }
}

let book1 = new Book('Scary Book', 'Horror', 'David Lych');
let book2 = new Book('Romantic Book', 'Romance', 'Sarah Hutch');
let book3 = new Book('To Be or Not To Be', 'Philosophy', 'Shakespeare', true);


console.log(book1, book2, book3);
