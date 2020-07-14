const myLibrary = [];


class Book {
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

  static deleteBook(index, render) {
    myLibrary.splice(index, 1);
    render();
  }
}

const clearElement = (element) => {
  element.innerHTML = '';
};

function addBookToLibrary() {
  const title = document.querySelector('#title').value;

  const author = document.querySelector('#author').value;

  const pages = document.querySelector('#pages').value;

  const read = document.querySelector('#read').checked;

  const newbook = new Book(title, author, pages, read);

  myLibrary.push(newbook);

  clearElement(document.querySelector('#form'));
  // eslint-disable-next-line no-use-before-define
  render();
}

const renderForm = () => {
  const form = document.querySelector('#form');

  form.innerHTML = `<label for="title">Title</label>

  <input type="text" name="title" id="title" />

  <label for="author">author</label>

  <input type="text" name="author" id="author" />

  <label for="pages">pages</label>

  <input type="text" name="pages" id="pages" />

  <label for="read">read</label>

  <input type="checkbox" name="read" id="read" />

  <button type="submit" id= 'create'>Create Book</button>`;

  document.querySelector('#create').addEventListener('click', addBookToLibrary);
};

function render() {
  const div = document.querySelector('.work');

  clearElement(div);
  // eslint-disable-next-line no-use-before-define
  renderBooks(div);
}

const renderBooks = (div) => {
  myLibrary.forEach((book, index) => {
    const ul = document.createElement('ul');

    const bookArray = Object.entries(book);

    bookArray.forEach((book, i) => {
      const li = document.createElement('li');

      li.innerText = `${bookArray[i][0]}-${bookArray[i][1]}`;

      ul.appendChild(li);
    });

    const toggle = document.createElement('button');

    toggle.innerText = `${!book.read ? 'Read' : 'Unread'}`;

    toggle.setAttribute('type', 'submit');

    ul.appendChild(toggle);

    const deleteBtn = document.createElement('button');

    deleteBtn.innerText = `Delete book${index}`;

    deleteBtn.setAttribute('id', `book${index}`);

    ul.appendChild(deleteBtn);

    div.appendChild(ul);

    deleteBtn.addEventListener('click', () => { Book.deleteBook(index, render); });

    toggle.addEventListener('click', () => { book.isRead(render); });
  });
};


const book1 = new Book('Hobbit', 'J.R.R. Tolkien', 295, true);

myLibrary.push(book1);
document.querySelector('#addBookBtn').addEventListener('click', renderForm);
render();
