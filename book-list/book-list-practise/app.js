// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};

// UI Constructor
function UI() {};

// Add Book to List
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create Table Element
    const row = document.createElement('tr');
    // Insert Rows
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>
    `;

    list.appendChild(row);
};

// Show Alert
UI.prototype.showAlert = function(message, className) {
    // Create a DIV
    const div = document.createElement('div');
    // Add Class
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert Alert
    container.insertBefore(div, form);

    // Disappear after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').remove();
    }, 3000);
};

// Delete Book
UI.prototype.deleteBook = function(target) {
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
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';    
};

// DOM Load Event
document.addEventListener('DOOMContentLoaded', function() {
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
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate new book
    const book = new Book(title, author, isbn);

    // Instantiate new UI Object
    const ui = new UI();

    // Validate
    if(title == '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // add Book to List
        ui.addBookToList(book);

        // Add book to LS
        let books;
        if(localStorage.getItem('books') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        };
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

        // Show Alert
        ui.showAlert('Book added Sucessfully', 'success');

        // Clear Fields
        ui.clearFields();
    };

    e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate new UI object
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Show Message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
});