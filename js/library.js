export const myLibrary = [];


export class Book {
  constructor(title, author, pages, read) {
    this.title = title;

    this.author = author;

    this.pages = pages;

    this.read = read;
  }

  isRead(render) {
    this.read = !this.read;
    render();
  }

  static deleteBook(index, render, notify) {
    myLibrary.splice(index, 1);
    notify('Book Deleted!!');
    render();
  }
}
