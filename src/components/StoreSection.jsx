import { useState, useEffect } from "react";
import "../styles/StoreSection.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

export function StoreSection() {
  const [books, setBooks] = useState([]);
  const [publishedBooks, setPublishedBooks] = useState([]);
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;

  useEffect(() => {
    // Cambia esta ruta al archivo JSON local
    fetch("http://localhost:5000/api/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos");
        }
        return response.json();
      })
      .then((data) => {
        const latestBooks = data.sort((a, b) => b.id - a.id).slice(0, 2);
        setBooks(latestBooks);
        setPublishedBooks(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section className="text-center containerStore">
    {/* <Container>
      <Row className="justify-content-center">
        {books.length === 2 ? (
          <Carousel interval={15000} indicators={true} className="w-100">
            {books.map((book, index) => (
              <Carousel.Item key={index}>
                <Card className="bg-dark text-light border-light p-3 h-100 d-flex flex-column w-75 mx-auto">
                  <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-center">
                      <Card.Img
                        variant="top"
                        src={book.image}
                        alt={book.title}
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={12} md={8} className="text-left d-flex flex-column justify-content-between">
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                        <Card.Text>{book.description}</Card.Text>
                        <Button
                          variant="warning"
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar en Amazon
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <Row className="justify-content-center">
            {books.map((book, index) => (
              <Col key={index} xs={12} md={6} className="mb-4 d-flex justify-content-center">
                <Card className="bg-dark text-light border-light p-3 h-100 d-flex flex-column">
                  <Row className="align-items-center">
                    <Col xs={12} md={4} className="text-center">
                      <Card.Img
                        variant="top"
                        src={book.image}
                        alt={book.title}
                        className="img-fluid"
                      />
                    </Col>
                    <Col xs={12} md={8} className="text-left d-flex flex-column justify-content-between">
                      <Card.Body>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
                        <Card.Text>{book.description}</Card.Text>
                        <Button
                          variant="warning"
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar en Amazon
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Row>
    </Container> */}

     {/* Sección de libros publicados */}
     <h2 className="display-4 text-dark mt-5" style={{overflow: 'hidden'}}>Libros Publicados</h2>
     <hr className="style-seven" />
      <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} className="w-100 mx-auto">
      {Array.from({ length: Math.ceil(publishedBooks.length / (window.innerWidth < 768 ? 1 : itemsPerPage)) }, (_, pageIndex) => (
          <Carousel.Item key={pageIndex}>
            <Container>
              <Row className="justify-content-center">
                {publishedBooks
                  .slice(pageIndex * (window.innerWidth < 768 ? 1 : itemsPerPage), (pageIndex + 1) * (window.innerWidth < 768 ? 1 : itemsPerPage))
                  .map((book, index) => (
                    <Col key={index} xs={10} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center book-image">
                      <Card className="bg-dark text-light border-light p-3 book-card">
                        <Card.Img
                          variant="top"
                          src={book.image}
                          alt={book.title}
                          className="img-fluid"
                          onClick={() => window.open(book.link, "_blank")}
                        />
                        <Card.Body className="text-center">
                          <Card.Title>{book.title}</Card.Title>
                        </Card.Body>
                         <Button
                          variant="warning"
                          href={book.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Comprar en Amazon
                        </Button>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
  </section>
  );

}

   {/* <h2 className="text-light mt-5">Libros Publicados</h2>
      <Container>
        <Row className="justify-content-center">
          {publishedBooks.map((book, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4 d-flex justify-content-center book-image">
              <Card className="bg-dark text-light border-light p-3 book-card">
                <Card.Img
                  variant="top"
                  src={book.image}
                  alt={book.title}
                  className="img-fluid"
                  onClick={() => window.open(book.link, "_blank")}
                />
                <Card.Body className="text-center">
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container> */}