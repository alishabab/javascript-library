// eslint-disable-next-line import/extensions
import { Book, myLibrary } from './library.js';

const form = document.querySelector('#form');

const clearElement = (element) => {
  element.innerHTML = '';
};

function addBookToLibrary() {
  const title = document.querySelector('#title').value;

  const author = document.querySelector('#author').value;

  const pages = document.querySelector('#pages').value;

  const read = document.querySelector('#read').checked;
  if (title.length > 0 && author.length > 0 && pages.length > 0) {
    const newbook = new Book(title, author, pages, read);

    myLibrary.push(newbook);

    form.classList.toggle('hide');
    // clearElement(document.querySelector('#form'));
    // eslint-disable-next-line no-use-before-define
    render();
  } else {
    // eslint-disable-next-line no-alert
    window.alert('Title/Author/Pages must not be empty');
  }
}

const renderForm = () => {
  form.classList.toggle('hide');
  // form.innerHTML = `<label for="title" (required)>Title</label>

  // <input type="text" name="title" id="title" required minlength="6" maxlength="6">
  // <br>
  // <label for="author">Author</label>

  // <input type="text" name="author" id="author" required>
  // <br>
  // <label for="pages">Pages</label>

  // <input type="number" name="pages" id="pages" required>
  // <br>
  // <label for="read">Read</label>

  // <input type="checkbox" name="read" id="read" />
  // <br>
  // <button type="submit" id= 'create'>Create Book</button>`;

  // document.querySelector('#create').addEventListener('click', addBookToLibrary);
};

const render = () => {
  const div = document.querySelector('.work');

  clearElement(div);
  // eslint-disable-next-line no-use-before-define
  renderBooks(div);
};

const renderBooks = (div) => {
  myLibrary.forEach((book, index) => {
    const ul = document.createElement('ul');

    const bookArray = Object.entries(book);

    bookArray.forEach((book, i) => {
      const li = document.createElement('li');

      li.innerHTML = `<strong>${bookArray[i][0].toUpperCase()}</strong> : ${bookArray[i][1]}`;

      ul.appendChild(li);
    });

    const readBtn = document.createElement('button');

    readBtn.innerText = `${!book.read ? 'Read' : 'Unread'}`;

    readBtn.setAttribute('type', 'submit');

    ul.appendChild(readBtn);

    const deleteBtn = document.createElement('button');

    deleteBtn.innerText = 'Delete book';

    deleteBtn.setAttribute('id', `book${index}`);

    ul.appendChild(deleteBtn);

    div.appendChild(ul);

    deleteBtn.addEventListener('click', () => { Book.deleteBook(index, render); });

    readBtn.addEventListener('click', () => { book.isRead(render); });
  });
};


const book1 = new Book('Hobbit', 'J.R.R. Tolkien', 295, true);
document.querySelector('#create').addEventListener('click', addBookToLibrary);
myLibrary.push(book1);
document.querySelector('#addBookBtn').addEventListener('click', renderForm);
render();