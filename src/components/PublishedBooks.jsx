import { useState, useEffect } from "react";
import "../styles/StoreSection.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export function PublishedBooks({ books }) {
    const [index, setIndex] = useState(0);
    const itemsPerPage = 8;
  
    if (!Array.isArray(books) || books.length === 0) {
        return <p className="text-light text-center my-4">No hay libros disponibles.</p>;
    }

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    return (
      <section className="text-center my-4">
        <h2 className="text-light mt-5">Libros Publicados</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null} className="w-100 mx-auto">
          {Array.from({ length: Math.ceil(books.length / itemsPerPage) }, (_, pageIndex) => (
            <Carousel.Item key={pageIndex}>
              <Container>
                <Row className="justify-content-center">
                  {books
                    .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                    .map((book, index) => (
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
              </Container>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
    );
  }
  