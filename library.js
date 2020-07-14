const myLibrary = []

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `The ${title} by ${author}, ${pages} pages, ${!read ? 'not read yet' : 'read already'}`;
  // };
}

Book.prototype.isRead =  function(book,cb) {
  return function() {
  book.read = !book.read;
  cb()
  }
};

let cbutton;
const addBookBtn = document.querySelector('#addBookBtn');
function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const newbook = new Book(title, author, pages, read);
  myLibrary.push(newbook);
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
  cbutton = document.querySelector('#create');
  cbutton.addEventListener('click', addBookToLibrary);
};


addBookBtn.addEventListener('click', renderForm);

function deleteBook(index) {
  return function () {
    myLibrary.splice(index, 1);
    render();
  };
}

function render() {
  const div = document.querySelector('.work');
  div.innerHTML = '';
  myLibrary.forEach((book, index) => {
    const ul = document.createElement('ul');
    bookArray = Object.entries(book)
    for (const i in bookArray ) {
      const li = document.createElement('li');
      li.innerText = `${bookArray[i][0]}-${bookArray[i][1]}`;
      ul.appendChild(li);
    }
    const toggle = document.createElement('button');
    toggle.innerText = `${!book.read?'Read':'Unread'}`
    toggle.setAttribute('type', 'submit');
    ul.appendChild(toggle);
    const dltb = document.createElement('button');
    dltb.innerText = `Delete book${index}`;
    dltb.setAttribute('id', `book${index}`);
    ul.appendChild(dltb);
    div.appendChild(ul);
    dltb.addEventListener('click', deleteBook(index));
    toggle.addEventListener('click', book.isRead(book,render));
  });
}


const book1 = new Book('Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(book1);
render();
/*eslint linebreak-style: ["error", "windows"]*/
// console.log(book1.info());