import NavbarTop from "../components/NavbarTop";
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container mx-auto text-dark d-flex flex-column align-items-center py-5 mt-5 mb-5">
        <NavbarTop />
        <h1>{t("privacy_policy.title")}</h1>
        <hr className="style-seven" style={{margin: "1px"}} />
        <div className="mt-75 w-75">
          <p>{t("privacy_policy.description")}</p>
          {t("privacy_policy.sections", { returnObjects: true }).map((section, index) => (
            <div key={index}>
              <h4 className='h4'><strong>{section.title}</strong></h4>
              {Array.isArray(section.content) ? (
                <ul>
                  {section.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: section.content }}></p>
              )}
            </div>
          ))}
          <p><a href="/" className="text-dark">{t("back")}</a></p>
        </div>
      </div>
    );
  }
  //   <div className="container col-12 my-4 text-light d-flex flex-column align-items-center">
  //     <Header />
  //       <h1>Política de Privacidad</h1>
  //       <div className="mt-75 w-75">
  //       <p>
  //         KillaLibros respeta tu privacidad y se compromete a proteger los datos
  //         personales que recopila. Esta política describe cómo recopilamos,
  //         usamos y protegemos tu información.
  //       </p>

  //       <h2>1. Información general</h2>
  //       <p>
  //         Esta política detalla cómo gestionamos los datos personales que
  //         recopilamos de nuestros usuarios.
  //       </p>

  //       <h2>2. Datos que recopilamos</h2>
  //       <ul>
  //         <li>
  //           Nombre y correo electrónico (a través del formulario de contacto).
  //         </li>
  //         <li>
  //           Información de navegación y cookies (para mejorar la experiencia de
  //           usuario).
  //         </li>
  //       </ul>

  //       <h2>3. Uso de la información</h2>
  //       <p>Utilizamos los datos recopilados para:</p>
  //       <ul>
  //         <li>
  //           Responder a consultas enviadas a través del formulario de contacto.
  //         </li>
  //         <li>Mejorar los servicios ofrecidos en la página web.</li>
  //       </ul>

  //       <h2>4. Terceros</h2>
  //       <p>
  //         No compartimos datos personales con terceros, excepto cuando sea
  //         requerido por ley.
  //       </p>

  //       <h2>5. Derechos del usuario</h2>
  //       <ul>
  //         <li>Solicitar acceso a tus datos personales.</li>
  //         <li>Rectificar o eliminar tus datos.</li>
  //         <li>Retirar tu consentimiento para el procesamiento de datos.</li>
  //       </ul>

  //       <h2>6. Contacto</h2>
  //       <p>
  //         Si tienes preguntas sobre esta política, envíanos un correo a{" "}
  //         <a href="mailto:info@killalibros.com">info@killalibros.com</a>.
  //       </p>
  //       <p><a href="/" className="text-light">Volver al inicio</a></p>
  //     </div>
  //   </div>
  // );
