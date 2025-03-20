import React from "react";

const BookCard = ({ book }) => {
  const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "16px",
      maxWidth: "250px",
      textAlign: "center",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      transition: "transform 0.3s, box-shadow 0.3s",
    },
    img: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      marginBottom: "12px",
    },
    title: {
      fontSize: "1.4rem",
      marginBottom: "8px",
      color: "#333",
    },
    text: {
      marginBottom: "4px",
      fontSize: "1rem",
      color: "#555",
    },
  };

  return (
    <div className="book-card" style={styles.card}>
      <img src={book.image} alt={book.name} style={styles.img} />
      <h2 style={styles.title}>{book.name}</h2>
      <p style={styles.text}>
        <strong>Genre:</strong> {book.genre}
      </p>
      <p style={styles.text}>
        <strong>Author:</strong> {book.author}
      </p>
    </div>
  );
};

const BookList = ({ books }) => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap", // Allows wrapping for smaller screens
      gap: "20px",
      padding: "20px",
      background: "url('https://via.placeholder.com/800')", // Replace with your stars image URL
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      minHeight: "100vh",
    },
  };

  return (
    <div style={styles.container}>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

// Example usage within the same file
const books = [
  {
    name: "Raven's Mark",
    genre: "Fiction",
    author: "eleo scina",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYv2xudganvvYGYRwATQ7VP56UfcXUQr--DQ&s",
  },
  {
    name: "Solomons ring",
    genre: "Mystery",
    author: "neo dadar",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk2YB51sAFd45h-TsEgZqp6csnH3aHcsDFqw&s",
  },
  {
    name: "Mania-robotic attack",
    genre: "Sci-Fi",
    author: "vinni royal",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6gW-4Zh-1uHIZMP1gKUBpJdGx02mPC-F9Q&s"
  // Add more books as needed
},
{
    name: "Attack of Titans",
    genre: "giant",
    author: "numuda",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMv8xnNvwkHVWu__uy5IHq9Ta12XFrpU6cEw&s"
  // Add more books as needed
}];


const App = () => {
  const appStyles = {
    textAlign: "center",
    color: "#fff",
  };

  return (
    <div>
      <h1 style={appStyles}>My Book Collection</h1>
      <BookList books={books} />
    </div>
  );
};

export default App;
