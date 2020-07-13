const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${title} by ${author}, ${pages} pages, ${!read ? 'not read yet' : 'read already'}`;
  };
}

const cbutton = document.querySelector('#create');

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;
  const newbook = new Book(title, author, pages, read);
  myLibrary.push(newbook);
}

cbutton.addEventListener('click', addBookToLibrary);


function render() {
  const div = document.querySelector('.work');
  myLibrary.forEach(book => {
    const ul = document.createElement('ul');
  });
}

const book1 = new Book('Hobbit', 'J.R.R. Tolkien', 295, true);
console.log(book1.info());