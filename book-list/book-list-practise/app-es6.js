class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    };
};

class UI {

    addBookToList(book) {
        const list = document.getElementById('book-list');
        // Create Table Elements
        const row = document.createElement('tr');
        // Insert Cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">x</a></td>        
        `;

        list.appendChild(row);
    };

    showAlert(message, className) {
        // Create a Div
        const div = document.createElement('div');
        // Add Classes
        div.className = `alert ${className}`;
        // Add Text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container'),
              form = document.querySelector('#book-form');
        // Insert Alert
        container.insertBefore(div, form);

        // Disappear after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    };

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        };
    };

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';        
    };
};


// Local Storage class

class Storage {

    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        };

        return books;
    };

    static displayBooks() {
        const books = Storage.getBooks();

        books.forEach(function(book) {
            const ui = new UI;
            // Add book to UI
            ui.addBookToList(book);
        });
    };

    static addBook(book) {
        const books = Storage.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    };

    static removeBook(isbn) {
        const books = Storage.getBooks();

        books.forEach(function(book, index) {
            if(book.isbn === isbn) {
                books.splice(index, 1);
            };
        });

        localStorage.setItem('books', JSON.stringify(books));
    };
};

// DOM Load Event
document.addEventListener('DOMContentLoaded', Storage.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get Form Values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;
    
    // Instantiate the new book
    const book = new Book(title, author, isbn);

    // Instqantiate new UI object
    const ui = new UI();

    // Validate
    if(title === '' || author === '' || isbn === '') {
        // Error Alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add Book to list
        ui.addBookToList(book);

        // Add to Local Storage
        Storage.addBook(book);

        // Show Alert
        ui.showAlert('Book Added Sucessfully', 'success');

        // Clear all fields
        ui.clearFields();
    };

    e.preventDefault();
});

// Event Listener for Delete
document.getElementById('book-list').addEventListener('click', function(e) {

    // Instantiate new UI object
    const ui = new UI();

    // Delete Book
    ui.deleteBook(e.target);

    // Remove from local storage
    Storage.removeBook(e.target.parentElement.previousElementSibling.textContent);

    // Show Message
    ui.showAlert('Book Removed', 'success');

    e.preventDefault();
});