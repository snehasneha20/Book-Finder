# Book-Finder

Book Finder — React Application
-------------------------------

Overview
--------

Book Finder is a simple React web application that allows users to search for books by title using the Open Library Search API.
It displays book details such as cover image, title, author, and publication year in a clean, responsive layout.

👤 User Persona
---------------

Name: Alex
Occupation: College Student

Needs:
-------

* Easily find books for study or personal reading.
* Search by title, author, or ISBN.
* View basic book details (cover, author, year).
* Simple, distraction-free interface.

Live Example API
----------------

Open Library API Endpoint:

```
https://openlibrary.org/search.json?title={bookTitle}
```

Example:

```
https://openlibrary.org/search.json?title=harry+potter
```

Features
-------

-> Search books by title using Open Library API
-> View book cover, title, author, and publication year
-> Responsive design (mobile and desktop friendly)
-> Error handling for invalid or empty results
-> Simple and lightweight — uses only React and Fetch API


Tech Stack
----------

| Technology       | Purpose                   |
| ---------------- | ------------------------- |
| **React.js**     | Frontend framework        |
| **CSS**          | Styling                   |
| **Fetch API**    | API calls to Open Library |
| **Open Library** | Book data source          |

---

Installation & Setup
--------------------

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/book-finder.git
   cd book-finder
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Run the application

   ```bash
   npm start
   ```

4. Open in browser

   ```
   http://localhost:3000
   ```

Project Structure
-----------------

```
book-finder/
├── public/
│   └── index.html
├── src/
│   ├── App.js          # Main React component
│   ├── App.css         # Styling for the app
│   ├── index.js        # Entry point for React
│   └── index.css       # Global CSS (optional)
└── package.json
```


Expected Output
--------------

1️ Home Page:
--------------
A centered title Book Finder with a search bar and button.

2️ Search Results:
------------------
A grid of books displaying:

* Cover image
* Title
* Author name
* First publish year

If no results are found:

```
No books found. Try a different title.
```

Sample Output
-------------

| Cover                    | Title        | Author | Year |
| ------------------------ | ------------ | ------ | ---- |
| 🧙‍♂️ Harry Potter       | J.K. Rowling | 1997   |      |
| 🧙‍♂️ Chamber of Secrets | J.K. Rowling | 1998   |      |


How It Works
------------
1. The user types a book title in the search box.
2. The app calls the Open Library API:
   `https://openlibrary.org/search.json?title={query}`
3. It receives a JSON response containing book data.
4. React dynamically displays the books as cards.
   
Error Handling
--------------
* If no book is found → shows a “No books found” message.
* If the API fails → shows “Something went wrong. Please try again later.”

Future Enhancements
-------------------
* Add Book Details Modal (description, subjects, ISBN).
* Allow Favorites (save books in localStorage).
* Include **Dark Mode.
* Add Search by Author or ISBN fields.
* Add Pagination / Load More functionality.

Conclusion
----------
The Book Finder app provides a smooth and user-friendly way for students like Alex to search and explore books.
It’s fast, minimal, and built entirely with React and the Open Library API.

License
-------
This project is open-source and free to use for educational or personal purposes.
