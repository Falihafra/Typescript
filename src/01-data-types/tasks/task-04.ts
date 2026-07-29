/**
 * 
 * The school library is building a digital catalog to help students search for books. 
 * Every book must store its ISBN number, title, author's name, total number of pages, 
 * book category, and whether the book is currently available for borrowing.
 * 
 * Task:
 * 1. Define a proper type for the book information.
 * 2. Implement a type that you defined on 3 books data.
 * 
 * display the book data using console.log.
 */

type Book = {
    ISBNnumber: number;
    title: String;
    authorsName: String;
    numberOfPage: number;
    bookCategory: String;
    available: boolean;
};

const book1: Book = {
  ISBNnumber: 2026001,
  title: "Pulang",
  authorsName: "Tere Liye",
  numberOfPage: 16,
  bookCategory: "Novel",
  available: true,
};

const book2: Book = {
  ISBNnumber: 2096780,
  title: "Pergi",
  authorsName: "Tere Liye",
  numberOfPage: 300,
  bookCategory: "Novel",
  available: true,
};

const book3: Book = {
  ISBNnumber: 975650,
  title: "WoW",
  authorsName: "Erlangga",
  numberOfPage: 100,
  bookCategory: "Komik",
  available: false,
};

const books: Book[] = [book1, book2, book3];


console.log("=== Books Information ===");
console.log(books);



