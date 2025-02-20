import { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

export function StoreSection() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Cambia esta ruta al archivo JSON local
    fetch("http://localhost:5000/api/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="text-center my-4">
      <h2 className="text-light">Tienda de KillaLibros</h2>
      <p className="text-light">Compra nuestros libros en Amazon</p>
      {books.length > 0 ? (
        <Carousel>
          {books.map((book, index) => (
            <Carousel.Item key={index}>
              <img
                src={book.image}
                alt={book.title}
                className="d-block w-50 mx-auto"
              />
              <Carousel.Caption>
                <div className="bg-dark bg-gradient bg-opacity-50 p-3">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <a
                    href={book.link}
                    className="btn btn-warning"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Comprar en Amazon
                  </a>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-light">Cargando libros...</p>
      )}
    </section>
  );
}