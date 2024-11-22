import BookCard from "./components/BookCard";

import bookMockingbird from "./images/mockingbird.jpg";
import book1984 from "./images/1984.jpg";
import bookPride from "./images/pride.jpg";
import bookAnimalfarm from "./images/animalfarm.jpg";
import bookDune from "./images/dune.jpg";
import bookCrime from "./images/crime.jpg";


function App() {

  const books = [
    {
      title: "To Kill a Mockingbird",
      image: bookMockingbird,
      price: 8.99,
    },
    {
      title: "1984",
      image: book1984,
      price: 12.99,
    },
    {
      title: "Pride and Prejudice",
      image: bookPride,
      price: 11.99,
    },
    {
      title: "Animal Farm",
      image: bookAnimalfarm,
      price: 13.99,
    },
    {
      title: "Dune",
      image: bookDune,
      price: 7.99,
    },
    {
      title: "Crime and Punishment",
      image: bookCrime,
      price: 5.99,
    },
  ];

  return (
    <div className="gallery">
      <h1>Book Galery</h1>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} title = {book.title} image = {book.image} price={book.price}></BookCard>
        ))}          
      </div>
    </div>
  );
}

export default App;
