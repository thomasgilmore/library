let myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read;
    }
}

var book = new Book("The Meaning of Mariah Carey", "Mariah Carey with Michaela Angela Davis", 349, "read");
var book2 = new Book("The Guest List", "Lucy Foley", 313, "read");
// console.log(book.info());

function addBookToLibrary(book) {
    myLibrary.push(book);
}

addBookToLibrary(book);
addBookToLibrary(book2);

myLibrary.forEach(book => {
    console.log(book);
});
