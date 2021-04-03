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
alert(book.info());