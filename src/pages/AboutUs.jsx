import { useTranslation } from 'react-i18next';
import NavbarTop from "../components/NavbarTop";

export function AboutUs() {
    const { t } = useTranslation();
  
    return (
      <section className="container my-4 text-dark">
        <NavbarTop />
        <h2 className="text-center pt-3 mt-5" style={{overflow: 'hidden'}}>{t("about.title")}</h2>
        <hr className="style-seven" />
        <h3 className="col-8 mx-auto py-3 text-center" style={{overflow: 'hidden'}}>{t("about.subtitle")}</h3>
        {t("about.sections", { returnObjects: true }).map((section, index) => (
          <div key={index} className="mb-4 col-8 mx-auto">
            <h4 className='h5'><strong>{section.title}</strong></h4>
            <p>{section.content}</p>
          </div>
        ))}
        <p className="text-center mt-4">
          {t("about.contact_text")} <a href="mailto:info@killalibros.com" className="text-dark">info@killalibros.com</a>
        </p>
      </section>
    );
  }
  