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
    <header className="header-container">
      <Container fluid className="header-content">
        <Row className="align-items-center justify-content-between">
          {/* TÍTULO BIENVENIDA */}
          <Col xs={12} md={6} className="text-md-end text-center welcome-container">
            <h1 className="welcome-title">{t("welcome")}</h1>
            <h3 className="welcome-subtitle">{t("description")}</h3>
          </Col>

          {/* LIBRO DESTACADO */}
          {books.map((book, index) => (
            <Col key={index} xs={12} md={6} className="text-center text-md-start book-container">
              <div className="mockup-container">
                <img src={bookMockup} alt={book.title} className="front" />
                <img src={book.backImage || book.image} alt={book.title} className="back" />
              </div>
              <div className="mt-3">
                <h4 className="book-title">{book.title}</h4>
                <h5 className="book-author">{book.author}</h5>
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
// return (
//   <header className="header-container row">
//   <Container className="header-content text-center overflow-hidden" style={{alignContent: "flex-end"}}>
//     <h1 className="welcome-title display-2 fw-bold overflow-hidden col-12 welcome">{t("welcome")}</h1>
//     {/* <hr className="style-seven mx-5" style={{width: "60%", borderColor:"black", borderRadius:"40px"}} /> */}
//     <Row className="justify-content-end overflow-hidden">
//     <h3 className="overflow-hidden text-end text-light" style={{textShadow:"4px 4px 6px rgba(0,0,0,0.4)"}}>{t("description")}</h3>
//       {books.map((book, index) => (
//           <Col key={index} xs={4} sm={6} md={6} lg={2} className="book-mockup d-flex justify-content-center overflow-hidden" style={{padding: "0 1rem"}}>
//             {/* <Card key={index} className="book-mockup" onMouseEnter={(e) => e.currentTarget.querySelector(".back").style.opacity = 1} onMouseLeave={(e) => e.currentTarget.querySelector(".back").style.opacity = 0}> */}
//                <div className="mockup-container">
//                  <img src={bookMockup} alt={book.title} className="front" />
//                  <img src={book.backImage || book.image} alt={book.title} className="back" />
//                </div>
//                <div className="text-center mt-3">
//                 <h4>{book.title}</h4>
//                 <h5 className="mb-3">{book.author}</h5>
//                 <a href={book.link} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
//                   {t("buy_on_amazon")}
//                 </a>
//               </div>
//           </Col>
//         ))}
//     </Row>
//   </Container>
// </header>
// );
