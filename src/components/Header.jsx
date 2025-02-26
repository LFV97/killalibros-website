import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";
import "../styles/Header.css";
import { useEffect, useState } from "react";
import bookMockup from "../assets/mockup/0011_01_prueba.svg";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/api/books")
      .then((response) => response.json())
      .then((data) => {
        const latestBooks = data.sort((a, b) => b.id - a.id).slice(0, 1);
        setBooks(latestBooks);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <header className="header-container row">
      {/* <main className="col-12 m-auto" style={{paddingTop: "20vh", textAlign: "start"}}>
        <h2 className="display-4 fw-bold" style={{overflow: 'hidden'}}>{t("welcome")}</h2>
      </main> */}
    <Container className="header-content text-center overflow-hidden" style={{alignContent: "flex-end"}}>
      <h1 className="welcome-title display-2 fw-bold overflow-hidden col-12 welcome">{t("welcome")}</h1>
      <Row className="justify-content-end overflow-hidden">
      <h3 className="overflow-hidden text-end text-light" style={{textShadow:"4px 4px 6px rgba(0,0,0,0.4)"}}>{t("description")}</h3>
      {/* {books.slice(0, window.innerWidth < 768 ? 1 : 2).map((book, index) => ( */}
        {books.map((book, index) => (
            <Col key={index} xs={4} sm={6} md={6} lg={2} className="book-mockup d-flex justify-content-center overflow-hidden" style={{padding: "0 1rem"}}>
              {/* <Card key={index} className="book-mockup" onMouseEnter={(e) => e.currentTarget.querySelector(".back").style.opacity = 1} onMouseLeave={(e) => e.currentTarget.querySelector(".back").style.opacity = 0}> */}
                 <div className="mockup-container">
                   <img src={bookMockup} alt={book.title} className="front" />
                   <img src={book.backImage || book.image} alt={book.title} className="back" />
                 </div>
                 <div className="text-center mt-3">
                  <h4>{book.title}</h4>
                  <h5 className="text-muted mb-3">{book.author}</h5>
                  <a href={book.link} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                    {t("buy_on_amazon")}
                  </a>
                </div>
            </Col>
          ))}
      </Row>
    </Container>
  </header>
);
}

    //   <header className="header-container row">
    //     <main className="col-12 m-auto" style={{paddingTop: "20vh", textAlign: "start"}}>
    //       <h2 className="display-4 fw-bold" style={{overflow: 'hidden'}}>{t("welcome")}</h2>
    //       {/* <p className="lead">{t("description")}</p> */}
    //     </main>
    //     <div className="featured-books d-flex">
    //       <h3>{t("description")}</h3>
    //       {books.map((book, index) => (
    //           <Card key={index} className="book-mockup" onMouseEnter={(e) => e.currentTarget.querySelector(".back").style.opacity = 1} onMouseLeave={(e) => e.currentTarget.querySelector(".back").style.opacity = 0}>
    //             <div className="mockup-container">
    //               <img src={book.image} alt={book.title} className="front" />
    //               <img src={book.backImage || book.frontImage} alt={book.title} className="back" />
    //             </div>
    //             {/* <Card.Body>
    //               <Card.Title>{book.title}</Card.Title>
    //               <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
    //               <a href={book.link} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
    //                 {t("buy_on_amazon")}
    //               </a>
    //             </Card.Body> */}
    //           </Card>
    //         ))}
    //     </div>
    // </header>





// return (
//   <Navbar expand="lg" className="w-100 fixed-top" variant="dark" style={{ zIndex: 1050 }}>
//     <Container fluid>
//     <Navbar.Brand href="/" className="text-light font-bold d-flex align-items-center title">
//         <img src={logo} alt="KillaLibros Logo" width="30" className="me-2" />
//         KillaLibros
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto">
//           <Nav.Link href="/" className="text-light mx-2">{t("home")}</Nav.Link>
//           <Nav.Link href="/preguntas" className="text-light mx-2">{t("questions")}</Nav.Link>
//           <Nav.Link href="/sobre-nosotros" className="text-light mx-2">{t("aboutUs")}</Nav.Link>
//         </Nav>
//         <div className="d-flex align-items-center overflow-hidden">
//           <button className="btn btn-sm btn-light mx-2" onClick={() => i18n.changeLanguage("es")}> 
//             <img src={es} alt="Español" width="16" height="16" />
//           </button>
//           <button className="btn btn-sm btn-light mx-2" onClick={() => i18n.changeLanguage("pt")}> 
//             <img src={pt} alt="Português" width="16" height="16" />
//           </button>
//         </div>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
// );







{/* <header className="bg-primary p3 text-center w-100">
      <h1 className="text-2xl font-bold">KillaLibros</h1>
      <nav>
        <a href="/" className="text-light mx-2">Inicio</a>
        <a href="/about" className="text-light mx-2">Acerca de</a>
      </nav>
      <div>
        <button onClick={() => i18n.changeLanguage("es")}>Español</button>
        <button onClick={() => i18n.changeLanguage("pt")}>Português</button>
      </div>
    </header> */}