const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `The ${title} by ${author}, ${pages} pages, ${!read ? 'not read yet' : 'read already'}`;
  // };
}

let cbutton 
const addBookBtn = document.querySelector("#addBookBtn")
function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;
  const newbook = new Book(title, author, pages, read);
  myLibrary.push(newbook);
  render()
}

const renderForm = () => {
  const form = document.querySelector('#form')
  form.innerHTML = `<label for="title">Title</label>
  <input type="text" name="title" id="title" />
  <label for="author">author</label>
  <input type="text" name="author" id="author" />
  <label for="pages">pages</label>
  <input type="text" name="pages" id="pages" />
  <label for="read">read</label>
  <input type="text" name="read" id="read" />
  <button type="submit" id= 'create'>Create Book</button>`
  cbutton = document.querySelector('#create');
  cbutton.addEventListener('click', addBookToLibrary);
}


addBookBtn.addEventListener('click', renderForm)

function render() {
  const div = document.querySelector('.work');
  div.innerHTML = ""
  myLibrary.forEach(book => {
    const ul = document.createElement('ul');
    for(let bookItem in book) {
      const li = document.createElement('li')
      li.innerText = book[bookItem]
      ul.appendChild(li)
    }
    div.appendChild(ul)
  });
}



const book1 = new Book('Hobbit', 'J.R.R. Tolkien', 295, true);
myLibrary.push(book1)
render()
// console.log(book1.info());