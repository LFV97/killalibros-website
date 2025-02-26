import NavbarTop from "../components/NavbarTop";
import { useTranslation } from 'react-i18next';

export default function CookiesPolicy() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto text-dark d-flex flex-column align-items-center pt-5 mt-5">
      <NavbarTop />
        <h1>{t("cookies_policy.title")}</h1>
        <hr className="style-seven" style={{margin: "1px"}} />
        <div className="w-75">
        {t("cookies_policy.sections", { returnObjects: true }).map((section, index) => (
          <div key={index}>
            <h4 className='h4'><strong>{section.title}</strong></h4>
            {Array.isArray(section.content) ? (
              <ul>
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{section.content}</p>
            )}
          </div>
        ))}
        <p><a href="/" className="text-dark">{t("back")}</a></p>
      </div>
    </div>
  );
  
  // return (
    //   <div className="container my-4 text-light d-flex flex-column align-items-center">
    //     <Header />
    //     <div className="mt-5 w-75">
    //       <h1>Política de Cookies</h1>
    //       <p>En KillaLibros utilizamos cookies para mejorar tu experiencia de navegación. Esta política describe los tipos de cookies que utilizamos y cómo puedes gestionarlas.</p>
    //       <br />
    //       <h3>1. ¿Qué son las cookies?</h3>
    //       <p>Las cookies son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia en el sitio web.</p>
    
    //       <h3>2. Tipos de cookies que usamos</h3>
    //       <ul>
    //         <li><strong>Cookies esenciales:</strong> Necesarias para el funcionamiento del sitio.</li>
    //         <li><strong>Cookies de análisis:</strong> Para recopilar estadísticas sobre el uso del sitio.</li>
    //       </ul>
    
    //       <h3>3. Configuración</h3>
    //       <p>Puedes gestionar tus preferencias de cookies en la configuración de tu navegador.</p>
    
    //       <h3>4. Contacto</h3>
    //       <p>Si tienes preguntas sobre esta política, envíanos un correo a <a href="mailto:info@killalibros.com">info@killalibros.com</a>.</p>
    //     </div>
    //     <p><a href="/" className="text-light">Volver al inicio</a></p>
    //   </div>
    // );
  }