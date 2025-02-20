import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Navbar, Nav } from "react-bootstrap";
import es from "../assets/es.png";
import pt from "../assets/pt.png";
import "../styles/Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const { t, i18n } = useTranslation();
  
  return (
    <Navbar expand="lg" className="bg-primary w-100 fixed-top" variant="dark" style={{ zIndex: 1050 }}>
      <Container fluid>
      <Navbar.Brand href="/" className="text-light font-bold d-flex align-items-center">
          <img src={logo} alt="KillaLibros Logo" width="30" className="me-2" />
          KillaLibros
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-light mx-2">{t("home")}</Nav.Link>
            <Nav.Link href="/preguntas" className="text-light mx-2">{t("questions")}</Nav.Link>
            <Nav.Link href="/sobre-nosotros" className="text-light mx-2">{t("aboutUs")}</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center overflow-hidden">
            <button className="btn btn-sm btn-light mx-2" onClick={() => i18n.changeLanguage("es")}> 
              <img src={es} alt="Español" width="16" height="16" />
            </button>
            <button className="btn btn-sm btn-light mx-2" onClick={() => i18n.changeLanguage("pt")}> 
              <img src={pt} alt="Português" width="16" height="16" />
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


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