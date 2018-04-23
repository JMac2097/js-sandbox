// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

// UI Constructor
function() {};

// Add book to list
UI.prototype.addBookToList = function(book) {
    const link = document.getElementById('book-list');
    // Create Table Element
    const row = document.createElement('tr');
    // Insert Cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.address}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
    // Create a div
    const div = document.createElement('div');
    // Add Classes
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // insert Alert
    container.insertBefore(div, form);

    //  Disappear after 3 Seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
};

// Delete Book
UI.prototype/deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    };
    // Delete Book from LS
    let books, isbn;
    isbn = target.parentElement.previousElementSibling.textContent;
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    };
    books.forEach(function(book, index) {
        if(book.isbn === isbn) {
            books.splice(index, 1);
        };
    });
    localStorage.setItem('books', JSON.stringify(books));
};

// Clear Fields
UI.prototype,clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    
};

// DOM Load Event
document.addEventListener('DOMContentLoaded', function() {
    // Load Books from LS
    let books;
    if(localStorage.getItem('books') === null) {
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    };
    books.forEach(function(book) {
        const ui = new UI;
        ui.addBookToList(book);
    });
});

// Event Listener for Add Book
document.getElementById('book-form').addEventListener('submit', function() {
    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate New Book
    const book = new Book(title, author, isbn);

    // Instantiate New UI Object
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add Book to List
        ui.addBookToList(book)
    };
});