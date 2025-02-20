import { useTranslation } from 'react-i18next';

export function Footer() {
    const { t, i18n } = useTranslation();

    return (
      <footer className="bg-dark text-light py-4 text-center">
        <div className="container">
          <p>&copy; 2024 KillaLibros. Todos los derechos reservados.</p>
          <p>
            <a href="/privacy-policy" className="text-light mx-2">{t("privacy_policy.title")}</a> |
            <a href="/cookies-policy" className="text-light mx-2">Política de cookies</a>
          </p>
          <div className="mt-3">
            <a href="https://www.facebook.com/killalibros" className="text-light mx-2" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.instagram.com/killalibros_editorial/" className="text-light mx-2" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.threads.net/@killalibros_editorial" className="text-light mx-2" target="_blank" rel="noopener noreferrer">Threads</a>
          </div>
        </div>
      </footer>
    );
  }

//   <script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="850f30bd-ca55-476c-b8b0-01a4a949e627" data-blockingmode="auto" type="text/javascript"></script>