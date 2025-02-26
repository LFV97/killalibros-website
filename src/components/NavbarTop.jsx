import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Navbar, Nav, Row, Col, Card } from "react-bootstrap";
import es from "../assets/es.png";
import pt from "../assets/pt.png";
import "../styles/NavbarTop.css";
import logo from "../assets/logo.png";


export default function NavbarTop() {
  const { t, i18n } = useTranslation();

  return (
    <Navbar expand="lg" className="navbar w-100 fixed-top" variant="dark" style={{ zIndex: 2000 }}>
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
