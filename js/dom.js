// eslint-disable-next-line import/extensions
import { Book, myLibrary } from './library.js';

const form = document.querySelector('#form');

const clearElement = (el) => {
  while (el.firstChild) el.removeChild(el.firstChild);
};

const renderForm = () => {
  form.classList.toggle('hide');
};

const render = () => {
  const div = document.querySelector('.work');

  clearElement(div);
  // eslint-disable-next-line no-use-before-define
  renderBooks(div);
};

const notify = (text) => {
  const toast = document.querySelector('.notify');
  toast.textContent = text;
};

function addBookToLibrary() {
  const title = document.querySelector('#title').value;

  const author = document.querySelector('#author').value;

  const pages = document.querySelector('#pages').value;

  const read = document.querySelector('#read').checked;
  if (title.length > 0 && author.length > 0 && pages.length > 0) {
    const newbook = new Book(title, author, pages, read);

    myLibrary.push(newbook);
    document.getElementById('reset').click();
    renderForm();
    render();
    notify('Book Added!!');
  } else {
    notify('Title/Author/Pages must not be empty. Please try again');
  }
}

const renderBooks = (div) => {
  myLibrary.forEach((book, index) => {
    const ul = document.createElement('ul');

    const bookArray = Object.entries(book);

    bookArray.forEach((book, i) => {
      const li = document.createElement('li');
      const strong = document.createElement('STRONG');
      const name = document.createElement('span');
      strong.textContent = `${bookArray[i][0].toUpperCase()} : `;
      name.textContent = `${bookArray[i][1]}`;
      li.appendChild(strong);
      li.appendChild(name);
      ul.appendChild(li);
    });

    const readBtn = document.createElement('button');

    readBtn.textContent = `${!book.read ? 'Read' : 'Unread'}`;

    readBtn.setAttribute('type', 'submit');

    ul.appendChild(readBtn);

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete book';

    deleteBtn.setAttribute('id', `book${index}`);

    ul.appendChild(deleteBtn);

    div.appendChild(ul);

    deleteBtn.addEventListener('click', () => { Book.deleteBook(index, render, notify); });

    readBtn.addEventListener('click', () => { book.isRead(render); });
  });
};

const Listeners = () => {
  document.querySelector('#create').addEventListener('click', addBookToLibrary);
  document.querySelector('#addBookBtn').addEventListener('click', renderForm);
};

Listeners();
const demoBook = new Book('Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(demoBook);

render();
