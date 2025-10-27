import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setBooks([]);

    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await response.json();
      if (data.docs.length === 0) {
        setError("No books found. Try a different title.");
      }
      setBooks(data.docs.slice(0, 20)); // Limit to 20 results
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchBooks();
  };

  return (
    <div className="app-container">
      <h1 className="title">📚 Book Finder</h1>

      {/* Search Section */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search books by title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {/* Loading / Error Messages */}
      {loading && <p className="info-text">Searching...</p>}
      {error && <p className="error-text">{error}</p>}

      {/* Results Section */}
      <div className="book-grid">
        {books.map((book) => {
          const coverUrl = book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : "https://via.placeholder.com/200x300?text=No+Cover";

          return (
            <div className="book-card" key={book.key}>
              <img src={coverUrl} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.author_name ? book.author_name[0] : "Unknown Author"}</p>
              <p className="year">
                {book.first_publish_year
                  ? `Year: ${book.first_publish_year}`
                  : ""}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
