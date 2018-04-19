// Book Constructor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};





// UI Constructor
function UI() {};


// Add book to list
UI.prototype.addBookToList = function(book) {
    const list = document.getElementById('book-list');
    // Create Table Element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>    
    <td><a href="#" class="delete">x</a></td>
    `;

    console.log(row);
    console.log(list);

    list.appendChild(row);

};

// Clear Fields
UI.prototype.clearFields = function() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
    
};

// Event Listener

document.getElementById('book-form').addEventListener('submit', function(e) {
    // Get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

    // Instantiate new book
    const book = new Book(title, author, isbn);

    // Instantiate new UI object
    const ui = new UI();

    // Add book to list
    ui.addBookToList(book);


    // Clear Fields
    ui.clearFields();

    e.preventDefault();
});


const tester = document.getElementById('book-list');
