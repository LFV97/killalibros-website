import { useTranslation } from 'react-i18next';
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaThreads } from "react-icons/fa6";
import "../styles/index.css";

export function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer className="text-dark py-3 text-center w-100 mb-0">
          <Container fluid>
            <p>&copy; 2024 KillaLibros. Todos los derechos reservados.</p>
            <p>
              <a href="/privacy-policy" className="text-dark mx-2">{t("privacy_policy.title")}</a> |
              <a href="/cookies-policy" className="text-dark mx-2">Política de cookies</a>
            </p>
            <div className="mt-3">
            <a href="https://www.facebook.com/killalibros" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={40} />
            </a>
            <a href="https://www.instagram.com/killalibros_editorial/" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={40} />
            </a>
            <a href="https://www.threads.net/@killalibros_editorial" className="text-dark mx-2" target="_blank" rel="noopener noreferrer">
              <FaThreads size={40} />
            </a>
          </div>
          </Container>
        </footer>
    );
  }

//   <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="850f30bd-ca55-476c-b8b0-01a4a949e627" data-blockingmode="auto" type="text/javascript"></script>